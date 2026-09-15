import { useCallback, useEffect, useState } from 'react';
import { units } from '../data/units';

const STORAGE_KEY = 'ielts-path-progress-v1';

export type ProgressState = {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  completedUnits: string[];
};

const DEFAULT_STATE: ProgressState = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  completedUnits: [],
};

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch {
    return DEFAULT_STATE;
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(() => loadState());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable (private mode, etc.) — progress just won't persist
    }
  }, [state]);

  const isUnlocked = useCallback(
    (unitId: string) => {
      const index = units.findIndex((u) => u.id === unitId);
      if (index <= 0) return true;
      return state.completedUnits.includes(units[index - 1].id);
    },
    [state.completedUnits],
  );

  const isCompleted = useCallback(
    (unitId: string) => state.completedUnits.includes(unitId),
    [state.completedUnits],
  );

  const completeLesson = useCallback((unitId: string, xpEarned: number, passed: boolean) => {
    setState((prev) => {
      const today = todayISO();
      let streak = prev.streak;
      if (prev.lastActiveDate === today) {
        // already active today, streak unchanged
      } else if (prev.lastActiveDate === yesterdayISO()) {
        streak = prev.streak + 1;
      } else {
        streak = 1;
      }
      const completedUnits = passed && !prev.completedUnits.includes(unitId)
        ? [...prev.completedUnits, unitId]
        : prev.completedUnits;
      return {
        ...prev,
        xp: prev.xp + xpEarned,
        streak,
        lastActiveDate: today,
        completedUnits,
      };
    });
  }, []);

  return { state, isUnlocked, isCompleted, completeLesson };
}
