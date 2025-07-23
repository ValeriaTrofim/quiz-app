import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";

const Quiz = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page: string }>;
}) => {
  // Await for query parameters and parseInt page, because query params are always strings or use 1 as default value.
  const page = await searchParams.then(
    (value: { page: string }) => parseInt(value.page) || 1
  );
  const pageSize = 1;
  const id = (await params).id;

  const questions = await prisma.question.findMany({
    where: {
      quizId: id,
    },
    include: {
      options: {
        select: {
          id: true,
          text: true,
          isCorrect: true,
        },
      },
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const questionCount = await prisma.question.count({
    where: {
      quizId: id,
    },
  });

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
              {/* <div className="bg-cyan-500 shadow-md shadow-cyan-500/50 h-2.5 rounded-full w-48"></div> */}
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
                >
                  {option.text}
                </label>
              </div>
            ))}
            <Pagination
              itemCount={questionCount}
              pageSize={pageSize}
              currentPage={page}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
