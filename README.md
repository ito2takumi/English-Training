# Band 8 Path

A Duolingo-style trainer for IELTS Academic Reading, pitched at Band 8–9 difficulty.

## What's inside

- **8 lessons** on a skill-tree path: 5 academic reading passages (climate science, behavioural
  economics, bioethics, archaeology, the attention economy) and 3 advanced-vocabulary units,
  unlocked sequentially.
- **Question types**: True/False/Not Given, multiple choice (including inference and
  vocabulary-in-context), heading matching, and sentence completion — the core IELTS Reading
  task types, written to require careful reading of qualifiers and nuance rather than simple
  keyword-spotting.
- **Game loop**: 5 hearts per lesson attempt, XP per correct answer plus a completion bonus,
  a daily streak counter, and a 70% accuracy threshold to unlock the next lesson.
- Progress (XP, streak, completed lessons) persists locally via `localStorage` — no backend.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

Built with React, TypeScript, and Vite.
