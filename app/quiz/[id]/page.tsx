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
    <div className="flex min-h-screen flex-col justify-between lg:p-24 md:p-12 p-5 m-5">
      {questions.map((question) => (
        <div key={question.id} className="flex flex-col items-start w-full">
          <div className="mt-4 mb-4 text-2xl text-indigo-200 font-bold">
            {question.text}
          </div>

          {question.options.map((option) => (
            <div
              key={option.id}
              className="relative w-full lg:h-11 md:h-24 h-32 mt-5"
            >
              <input
                type="checkbox"
                id={option.id}
                className="appearance-none border-solid border-2 border-slate-800 cursor-pointer h-full w-full 
                    checked:border-cyan-500 shadow-md shadow-cyan-500/50 transition-all duration-200 hover:border-cyan-500"
              ></input>
              <label
                htmlFor={option.id}
                className="absolute top-[50%] left-3 right-3 text-indigo-100   -translate-y-[50%]
                     peer-checked:text-indigo-100 transition-all duration-200 select-none
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
      ))}
    </div>
  );
};

export default Quiz;
