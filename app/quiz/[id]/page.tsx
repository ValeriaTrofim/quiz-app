"use client";
import Pagination from "@/app/components/Pagination";
import { OptionProps, QuestionDataProps } from "@/app/types/types";
import axios from "axios";
import { useTransition, useState, useEffect } from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import { getPaginatedQuestions } from "@/app/quiz/[id]/actions";
import { useGlobalContext } from "@/app/context/GlobalContext";

const Quiz = () => {
  const { selectedAnswers, setselectedAnswers, setQuizAnswers } =
    useGlobalContext();
  const searchParams = useSearchParams();
  const params = useParams<{ id: string }>();
  const [currentIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<OptionProps | null>(
    null
  );
  // Initialize our questionData with an empty array and 0 count, until we fetch the data and set the value for it in the useEffect.
  const [questionData, setQuestionData] = useState<QuestionDataProps>({
    questions: [],
    questionCount: 0,
  });
  // Transition is used to invoke the server function inside of the useEffect.
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Await for query parameters and parseInt page, because query params are always strings or use 1 as default value.
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = 1;
  const id = params.id;

  // Fetch the page specific question once the component is mounted.
  useEffect(() => {
    startTransition(async () => {
      const data = await getPaginatedQuestions(id, pageSize, page);
      setQuestionData(data);
    });
  }, [id, pageSize, page]);

  // Destructure our fetched paginated questions and question count.
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

  const handleFinishQuiz = async () => {
    setQuizAnswers(selectedAnswers);

    const score = selectedAnswers.filter(
      (res: { isCorrect: boolean }) => res.isCorrect
    ).length;

    try {
      const res = await axios.post("/api/results", {
        quizId: id,
        score,
        selectedAnswers,
      });

      console.log("Quiz finished:", res.data);
    } catch (error) {
      console.log("Error finishing quiz:", error);
    }
    router.push("/results");
  };

  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-between lg:p-24 md:p-12 p-5 m-5">
      {questions.map((question) => (
        <div
          key={question.id}
          className="grid grid-cols-1 md:grid-cols-2 md:gap-[5rem] items-start w-full "
        >
          <div className="flex flex-col items-start w-full">
            <h4 className="mt-10 text-xl font-bold text-cyan-500">
              Question {page} of {questionCount}
            </h4>
            <div className="lg:h-11 md:h-24 h-32 md:mt-24 lg:mt-24 mt-5 mb-5 text-2xl md:text-3xl lg:text-3xl text-indigo-200 font-bold ">
              {question.text}
            </div>

            <div className="w-full md:mt-44 ">
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
                  className="appearance-none border-solid border-2 border-slate-800 cursor-pointer h-full w-full 
                    checked:border-cyan-500 shadow-md shadow-cyan-500/50 transition-all duration-200 hover:border-cyan-500"
                ></input>
                <label
                  htmlFor={option.id}
                  className="absolute top-[50%] left-6 right-6 text-indigo-100   -translate-y-[50%]
                     peer-checked:text-indigo-100 font-bold transition-all duration-200 select-none
                "
                  onClick={() => handleActiveQuestion(option as OptionProps)}
                >
                  {option.text === activeQuestion?.text}
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
