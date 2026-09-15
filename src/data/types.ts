export type MCQQuestion = {
  id: string;
  kind: 'mcq';
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type TFNGQuestion = {
  id: string;
  kind: 'tfng';
  statement: string;
  answer: 'True' | 'False' | 'Not Given';
  explanation: string;
};

export type HeadingQuestion = {
  id: string;
  kind: 'heading';
  paragraphLabel: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type ClozeQuestion = {
  id: string;
  kind: 'cloze';
  sentence: string; // use ___ as the blank placeholder
  answer: string;
  acceptable?: string[];
  explanation: string;
};

export type VocabQuestion = {
  id: string;
  kind: 'vocab';
  word: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Question =
  | MCQQuestion
  | TFNGQuestion
  | HeadingQuestion
  | ClozeQuestion
  | VocabQuestion;

export type Paragraph = {
  label: string;
  text: string;
};

export type Unit = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  kind: 'reading' | 'vocabulary';
  passageTitle?: string;
  paragraphs?: Paragraph[];
  questions: Question[];
};
