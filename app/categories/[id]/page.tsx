import prisma from "@/prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";

const CategoryDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const quizzes = await prisma.quiz.findMany({
    where: {
      categoryId: id,
    },
    include: {
      questions: {
        select: {
          id: true,
          text: true,
          difficulty: true,
          options: {
            select: {
              id: true,
              text: true,
              isCorrect: true,
            },
          },
        },
      },
    },
    orderBy: { id: "asc" },
  });

  if (!quizzes) notFound;

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-between p-24 lg:p-40 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        {quizzes?.map((quiz) => (
          <div
            key={quiz.id}
            className="max-w-sm hover:bg-slate-800 shadow-lg shadow-cyan-500/50 hover:-translate-y-1 transition-transform duration-300 ease-in-out p-10"
          >
            <Link href={`/quiz/${quiz.id}`}>
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-indigo-100  ">
                {quiz.title}
              </h5>
              <p className="mb-3 font-normal text-indigo-200 hidden lg:block">
                {quiz.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
