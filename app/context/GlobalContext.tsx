"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { AnswerProps, OptionProps, QuestionDataProps } from "../types/types";

interface ContextProps {
  selectedAnswers: AnswerProps[];
  setselectedAnswers: Dispatch<SetStateAction<AnswerProps[]>>;
  quizAnswers: AnswerProps[];
  setQuizAnswers: Dispatch<SetStateAction<AnswerProps[]>>;
  questionData: QuestionDataProps;
  setQuestionData: Dispatch<SetStateAction<QuestionDataProps>>;
  activeQuestion: OptionProps | null;
  setActiveQuestion: Dispatch<SetStateAction<OptionProps | null>>;
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
  activeQuestion: null,
  setActiveQuestion: () => {},
});

export const GlobalContextProvider = ({ children }: ContextProviderProps) => {
  const [selectedAnswers, setselectedAnswers] = useState<AnswerProps[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<AnswerProps[]>([]);
  const [questionData, setQuestionData] = useState<QuestionDataProps>({
    questions: [],
    questionCount: 0,
  });
  const [activeQuestion, setActiveQuestion] = useState<OptionProps | null>(
    null
  );

  return (
    <GlobalContext.Provider
      value={{
        selectedAnswers,
        setselectedAnswers,
        quizAnswers,
        setQuizAnswers,
        questionData,
        setQuestionData,
        activeQuestion,
        setActiveQuestion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
