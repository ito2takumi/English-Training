import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Lesson from './components/Lesson';
import { units } from './data/units';
import { useProgress } from './state/useProgress';

type View = { screen: 'home' } | { screen: 'lesson'; unitId: string };

function App() {
  const { state, isUnlocked, isCompleted, completeLesson } = useProgress();
  const [view, setView] = useState<View>({ screen: 'home' });

  if (view.screen === 'lesson') {
    const unit = units.find((u) => u.id === view.unitId);
    if (!unit) {
      setView({ screen: 'home' });
      return null;
    }
    return (
      <Lesson
        unit={unit}
        onExit={(result) => {
          if (result.xpEarned > 0 || result.passed) {
            completeLesson(unit.id, result.xpEarned, result.passed);
          }
          setView({ screen: 'home' });
        }}
      />
    );
  }

  return (
    <Home
      progress={state}
      isUnlocked={isUnlocked}
      isCompleted={isCompleted}
      onStartUnit={(unitId) => setView({ screen: 'lesson', unitId })}
    />
  );
}

export default App;
