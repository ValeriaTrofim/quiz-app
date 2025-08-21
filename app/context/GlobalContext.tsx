"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { AnswerProps } from "../types/types";

interface ContextProps {
  selectedAnswers: AnswerProps[];
  setselectedAnswers: Dispatch<SetStateAction<AnswerProps[]>>;
  quizAnswers: AnswerProps[];
  setQuizAnswers: Dispatch<SetStateAction<AnswerProps[]>>;
}

type ContextProviderProps = {
  children?: ReactNode;
};

const GlobalContext = createContext<ContextProps>({
  selectedAnswers: [],
  setselectedAnswers: () => {},
  quizAnswers: [],
  setQuizAnswers: () => {},
});

export const GlobalContextProvider = ({ children }: ContextProviderProps) => {
  const [selectedAnswers, setselectedAnswers] = useState<AnswerProps[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<AnswerProps[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        selectedAnswers,
        setselectedAnswers,
        quizAnswers,
        setQuizAnswers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
