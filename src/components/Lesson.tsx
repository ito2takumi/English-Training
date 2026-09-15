import { useMemo, useState } from 'react';
import type { Question, Unit } from '../data/types';
import { PASS_THRESHOLD } from '../data/units';

const START_HEARTS = 5;
const XP_PER_CORRECT = 10;
const XP_COMPLETION_BONUS = 30;

type Phase = 'question' | 'feedback' | 'result' | 'failed';

type ChoiceView = {
  prompt: string;
  options: string[];
  correctIndex: number;
};

function toChoiceView(q: Question): ChoiceView | null {
  switch (q.kind) {
    case 'mcq':
      return { prompt: q.prompt, options: q.options, correctIndex: q.answerIndex };
    case 'heading':
      return {
        prompt: `Which heading best fits ${q.paragraphLabel}?`,
        options: q.options,
        correctIndex: q.answerIndex,
      };
    case 'vocab':
      return {
        prompt: `Choose the definition closest in meaning to: "${q.word}"`,
        options: q.options,
        correctIndex: q.answerIndex,
      };
    case 'tfng': {
      const options = ['True', 'False', 'Not Given'];
      return { prompt: q.statement, options, correctIndex: options.indexOf(q.answer) };
    }
    default:
      return null;
  }
}

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/[.,]$/, '');
}

export default function Lesson({
  unit,
  onExit,
}: {
  unit: Unit;
  onExit: (result: { passed: boolean; xpEarned: number; correct: number; total: number }) => void;
}) {
  const [index, setIndex] = useState(0);
  const [hearts, setHearts] = useState(START_HEARTS);
  const [correctCount, setCorrectCount] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');
  const [selected, setSelected] = useState<number | null>(null);
  const [clozeInput, setClozeInput] = useState('');
  const [wasCorrect, setWasCorrect] = useState(false);
  const [passageOpen, setPassageOpen] = useState(true);

  const total = unit.questions.length;
  const question = unit.questions[index];
  const choiceView = useMemo(() => toChoiceView(question), [question]);

  function submitChoice(optionIndex: number) {
    if (phase !== 'question' || !choiceView) return;
    setSelected(optionIndex);
    const correct = optionIndex === choiceView.correctIndex;
    grade(correct);
  }

  function submitCloze() {
    if (phase !== 'question' || question.kind !== 'cloze') return;
    const guess = normalize(clozeInput);
    const accepted = [question.answer, ...(question.acceptable ?? [])].map(normalize);
    const correct = accepted.includes(guess);
    grade(correct);
  }

  function grade(correct: boolean) {
    setWasCorrect(correct);
    if (correct) {
      setCorrectCount((c) => c + 1);
      setXpEarned((x) => x + XP_PER_CORRECT);
      setPhase('feedback');
    } else {
      const remaining = hearts - 1;
      setHearts(remaining);
      if (remaining <= 0) {
        setPhase('failed');
      } else {
        setPhase('feedback');
      }
    }
  }

  function next() {
    if (index + 1 >= total) {
      const accuracy = correctCount / total;
      const passed = accuracy >= PASS_THRESHOLD;
      const bonus = passed ? XP_COMPLETION_BONUS : 0;
      setXpEarned((x) => x + bonus);
      setPhase('result');
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setClozeInput('');
      setPhase('question');
    }
  }

  if (phase === 'failed') {
    return (
      <div className="lesson-end">
        <div className="lesson-end-icon">💔</div>
        <h2>Out of hearts</h2>
        <p>
          You answered {correctCount} of {index + 1} questions correctly. Review the passage and try
          again — you've got this.
        </p>
        <div className="lesson-end-actions">
          <button className="btn btn-primary" onClick={() => onExit({ passed: false, xpEarned, correct: correctCount, total })}>
            Back to path
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'result') {
    const accuracy = Math.round((correctCount / total) * 100);
    const passed = accuracy / 100 >= PASS_THRESHOLD;
    return (
      <div className="lesson-end">
        <div className="lesson-end-icon">{passed ? '🎉' : '📘'}</div>
        <h2>{passed ? 'Lesson complete!' : 'Good effort'}</h2>
        <div className="result-stats">
          <div className="result-stat">
            <span className="result-stat-value">{xpEarned}</span>
            <span className="result-stat-label">XP earned</span>
          </div>
          <div className="result-stat">
            <span className="result-stat-value">{accuracy}%</span>
            <span className="result-stat-label">Accuracy</span>
          </div>
        </div>
        {!passed && (
          <p className="result-note">
            You need {Math.round(PASS_THRESHOLD * 100)}% accuracy to unlock the next lesson. Give it another go!
          </p>
        )}
        <div className="lesson-end-actions">
          <button
            className="btn btn-primary"
            onClick={() => onExit({ passed, xpEarned, correct: correctCount, total })}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson">
      <div className="lesson-header">
        <button className="lesson-close" onClick={() => onExit({ passed: false, xpEarned, correct: correctCount, total })} aria-label="Exit lesson">
          ✕
        </button>
        <div className="lesson-progress-track">
          <div
            className="lesson-progress-fill"
            style={{ width: `${(index / total) * 100}%` }}
          />
        </div>
        <div className="lesson-hearts" aria-label={`${hearts} hearts remaining`}>
          {Array.from({ length: START_HEARTS }).map((_, i) => (
            <span key={i} className={i < hearts ? 'heart heart-full' : 'heart heart-empty'}>
              {i < hearts ? '❤️' : '🖤'}
            </span>
          ))}
        </div>
      </div>

      <div className={`lesson-body ${unit.kind === 'reading' ? 'lesson-body-split' : ''}`}>
        {unit.kind === 'reading' && unit.paragraphs && (
          <div className={`passage-panel ${passageOpen ? 'open' : 'collapsed'}`}>
            <button className="passage-toggle" onClick={() => setPassageOpen((o) => !o)}>
              {passageOpen ? 'Hide passage ▲' : 'Show passage ▼'}
            </button>
            {passageOpen && (
              <div className="passage-content">
                <h3>{unit.passageTitle}</h3>
                {unit.paragraphs.map((p) => (
                  <p key={p.label}>
                    <strong>{p.label}. </strong>
                    {p.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="question-panel">
          <div className="question-kicker">
            Question {index + 1} of {total}
          </div>

          {question.kind === 'cloze' ? (
            <div className="question-cloze">
              <p className="question-prompt">Complete the sentence (use words from the passage):</p>
              <p className="cloze-sentence">
                {question.sentence.split('___').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <input
                        className={`cloze-input ${phase !== 'question' ? (wasCorrect ? 'input-correct' : 'input-incorrect') : ''}`}
                        value={clozeInput}
                        disabled={phase !== 'question'}
                        onChange={(e) => setClozeInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') submitCloze();
                        }}
                        placeholder="type here"
                      />
                    )}
                  </span>
                ))}
              </p>
              {phase === 'question' && (
                <button className="btn btn-primary" disabled={!clozeInput.trim()} onClick={submitCloze}>
                  Check
                </button>
              )}
            </div>
          ) : (
            choiceView && (
              <div className="question-choice">
                <p className="question-prompt">{choiceView.prompt}</p>
                <div className="options-list">
                  {choiceView.options.map((opt, i) => {
                    let cls = 'option-btn';
                    if (phase !== 'question') {
                      if (i === choiceView.correctIndex) cls += ' option-correct';
                      else if (i === selected) cls += ' option-incorrect';
                    } else if (i === selected) {
                      cls += ' option-selected';
                    }
                    return (
                      <button
                        key={i}
                        className={cls}
                        disabled={phase !== 'question'}
                        onClick={() => submitChoice(i)}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          )}

          {phase === 'feedback' && (
            <div className={`feedback-panel ${wasCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
              <div className="feedback-title">{wasCorrect ? 'Correct!' : 'Not quite'}</div>
              <p className="feedback-explanation">{question.explanation}</p>
              {question.kind === 'cloze' && !wasCorrect && (
                <p className="feedback-answer">Correct answer: {question.answer}</p>
              )}
              <button className="btn btn-primary" onClick={next}>
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
