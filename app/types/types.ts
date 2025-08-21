interface AnswerProps {
  questionId: string;
  optionId: string;
  isCorrect: boolean;
}

interface OptionProps {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuestionProps {
  id: string;
  text: string;
  difficulty?: string | null;
  options: OptionProps[];
}

interface QuestionDataProps {
  questions: QuestionProps[];
  questionCount: number;
}

export type { AnswerProps, OptionProps, QuestionDataProps };
