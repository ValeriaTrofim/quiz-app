"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { AnswerProps, QuestionDataProps } from "../types/types";

interface ContextProps {
  selectedAnswers: AnswerProps[];
  setselectedAnswers: Dispatch<SetStateAction<AnswerProps[]>>;
  quizAnswers: AnswerProps[];
  setQuizAnswers: Dispatch<SetStateAction<AnswerProps[]>>;
  questionData: QuestionDataProps;
  setQuestionData: Dispatch<SetStateAction<QuestionDataProps>>;
}

type ContextProviderProps = {
  children?: ReactNode;
};

const GlobalContext = createContext<ContextProps>({
  selectedAnswers: [],
  setselectedAnswers: () => {},
  quizAnswers: [],
  setQuizAnswers: () => {},
  questionData: {
    questions: [],
    questionCount: 0,
  },
  setQuestionData: () => {},
});

export const GlobalContextProvider = ({ children }: ContextProviderProps) => {
  const [selectedAnswers, setselectedAnswers] = useState<AnswerProps[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<AnswerProps[]>([]);
  const [questionData, setQuestionData] = useState<QuestionDataProps>({
    questions: [],
    questionCount: 0,
  });

  return (
    <GlobalContext.Provider
      value={{
        selectedAnswers,
        setselectedAnswers,
        quizAnswers,
        setQuizAnswers,
        questionData,
        setQuestionData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
