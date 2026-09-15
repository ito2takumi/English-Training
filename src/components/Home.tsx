import { useState } from 'react';
import { units } from '../data/units';
import type { ProgressState } from '../state/useProgress';

const OFFSETS = [0, 60, 90, 60, 0, -60, -90, -60];

export default function Home({
  progress,
  isUnlocked,
  isCompleted,
  onStartUnit,
}: {
  progress: ProgressState;
  isUnlocked: (id: string) => boolean;
  isCompleted: (id: string) => boolean;
  onStartUnit: (id: string) => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedUnit = units.find((u) => u.id === selectedId) ?? null;

  const completedCount = progress.completedUnits.length;

  return (
    <div className="home">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="topbar-logo">🦉</span>
          <span className="topbar-title">Band 8 Path</span>
        </div>
        <div className="topbar-stats">
          <div className="stat-chip stat-streak">
            <span>🔥</span>
            <span>{progress.streak}</span>
          </div>
          <div className="stat-chip stat-xp">
            <span>⭐</span>
            <span>{progress.xp} XP</span>
          </div>
        </div>
      </header>

      <div className="home-intro">
        <h1>IELTS Reading Path</h1>
        <p>
          Band 8–9 passages and vocabulary. {completedCount} / {units.length} lessons complete.
        </p>
      </div>

      <div className="path">
        {units.map((unit, i) => {
          const unlocked = isUnlocked(unit.id);
          const completed = isCompleted(unit.id);
          const offset = OFFSETS[i % OFFSETS.length];
          return (
            <div
              className="path-row"
              key={unit.id}
              style={{ ['--offset' as string]: `${offset}px` }}
            >
              <button
                className={`path-node ${completed ? 'node-completed' : ''} ${!unlocked ? 'node-locked' : ''}`}
                style={unlocked ? { background: unit.color } : undefined}
                disabled={!unlocked}
                onClick={() => setSelectedId(unit.id)}
              >
                <span className="path-node-icon">{unlocked ? unit.icon : '🔒'}</span>
                {completed && <span className="path-node-check">✓</span>}
              </button>
              <div className="path-label">{unit.title}</div>
            </div>
          );
        })}
      </div>

      {selectedUnit && (
        <div className="modal-backdrop" onClick={() => setSelectedId(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon" style={{ background: selectedUnit.color }}>
              {selectedUnit.icon}
            </div>
            <h2>{selectedUnit.title}</h2>
            <p className="modal-subtitle">{selectedUnit.subtitle}</p>
            <p className="modal-desc">
              {selectedUnit.kind === 'reading'
                ? `An academic passage with ${selectedUnit.questions.length} questions — True/False/Not Given, multiple choice, heading matching, and sentence completion.`
                : `${selectedUnit.questions.length} advanced vocabulary items at IELTS Band 8+ level.`}
            </p>
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setSelectedId(null)}>
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  onStartUnit(selectedUnit.id);
                  setSelectedId(null);
                }}
              >
                {isCompleted(selectedUnit.id) ? 'Practice again' : 'Start lesson'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
