"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useGlobalContext } from "../context/GlobalContext";
import Pagination from "./Pagination";
import { useEffect, useState, useTransition } from "react";
import { getPaginatedQuestions } from "../quiz/[id]/actions";
import { OptionProps } from "../types/types";

const Quiz = () => {
  const {
    selectedAnswers,
    setselectedAnswers,
    setQuizAnswers,
    questionData,
    setQuestionData,
    activeQuestion,
    setActiveQuestion,
  } = useGlobalContext();
  const searchParams = useSearchParams();
  const params = useParams<{ id: string }>();
  const [currentIndex] = useState(0);

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = 1;
  const id = params.id;

  useEffect(() => {
    startTransition(async () => {
      const data = await getPaginatedQuestions(id, pageSize, page);
      setQuestionData(data);
    });
  }, [id, pageSize, page]);

  const { questions, questionCount } = questionData;

  const handleActiveQuestion = (option: OptionProps) => {
    if (!questions[currentIndex]) return;
    const answer = {
      questionId: questions[currentIndex].id,
      optionId: option.id,
      isCorrect: option.isCorrect,
    };

    setselectedAnswers((prev) => {
      const existingIndex = prev.findIndex((res: { questionId: string }) => {
        return res.questionId === answer.questionId;
      });

      if (existingIndex !== -1) {
        const updatedAnswers = [...prev];
        updatedAnswers[existingIndex] = answer;

        return updatedAnswers;
      } else {
        return [...prev, answer];
      }
    });
    setActiveQuestion(option);
  };

  const handleFinishQuiz = () => {
    setQuizAnswers(selectedAnswers);

    router.push("/results");
  };
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-between lg:p-24 md:p-12 p-5 m-5">
      {questions.map((question) => (
        <div
          key={question.id}
          className="grid grid-cols-1 lg:grid-cols-2 md:gap-[5rem] items-start w-full "
        >
          <div className="flex flex-col items-start w-full">
            <h4 className="mt-10 text-xl font-bold text-cyan-500">
              Question {page} of {questionCount}
            </h4>
            <div className="lg:h-11 h-[5rem] md:mt-24 lg:mt-24 mt-5 lg:mb-5 mb-1 text-2xl md:text-3xl text-indigo-200 font-bold ">
              {question.text}
            </div>

            <div className="w-full lg:mt-44 mt-1">
              <progress
                className="w-full bg-slate-700 rounded-full h-2.5 shadow-md shadow-cyan-500/50 [&::-webkit-progress-bar]:bg-cyan-500  [&::-webkit-progress-value]:bg-cyan-500 [&::-moz-progress-bar]:bg-cyan-500"
                value={page}
                max={questionCount}
              ></progress>
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            {question.options.map((option) => (
              <div
                key={option.id}
                className="relative w-full lg:h-24 md:h-24 h-32 mt-5 "
              >
                <input
                  type="checkbox"
                  id={option.id}
                  onChange={() => handleActiveQuestion(option as OptionProps)}
                  className={`${
                    option.text === activeQuestion?.text
                      ? "appearance-none border-solid border-2 border-slate-800 cursor-pointer h-full w-full checked:border-cyan-500 shadow-md shadow-cyan-500/50 transition-all duration-200 hover:border-cyan-500"
                      : "appearance-none border-solid border-2 border-slate-800 cursor-pointer h-full w-full transition-all duration-200 hover:border-cyan-500"
                  }`}
                ></input>
                <label
                  htmlFor={option.id}
                  className="absolute top-[50%] left-6 right-6 text-indigo-100   -translate-y-[50%]
                     peer-checked:text-indigo-100 font-bold transition-all duration-200 select-none\
                     
                "
                >
                  <span className="relative inline-flex size-3 rounded-full bg-cyan-800 mr-2"></span>
                  {option.text}
                </label>
              </div>
            ))}
            <Pagination
              itemCount={questionCount}
              pageSize={pageSize}
              currentPage={page}
              seeResults={handleFinishQuiz}
              isPending={isPending}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
