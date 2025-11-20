import prisma from "@/prisma/client";
import Link from "next/link";
import { FaArrowAltCircleDown, FaBug } from "react-icons/fa";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

const CategoryDetailPage = async ({ params }: Props) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
        {quizzes?.map((quiz) => (
          <div
            key={quiz.id}
            className="max-w-sm group hover:bg-slate-900 shadow-lg shadow-cyan-500/50 hover:-translate-y-1 transition-transform duration-300 ease-in-out lg:p-10 p-3"
          >
            <FaArrowAltCircleDown className="animate-bounce text-indigo-100 ml-12 lg:ml-0 opacity-0 group-hover:opacity-100 hidden lg:block" />
            <Link href={`/quiz/${quiz.id}`}>
              <h5 className="m-3 text-2xl text-center font-bold tracking-tight text-indigo-100  ">
                {quiz.title}
              </h5>
              <p className="mb-3 font-normal text-indigo-200 hidden lg:block">
                {quiz.description}
              </p>
            </Link>
            <div className="flex justify-center">
              <FaBug className="block lg:hidden animate-bounce text-indigo-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = await prisma.category.findUnique({ where: { id: id } });

  return {
    title: "Quiz App - Difficulty" + " " + category?.name,
    description: "View the difficlty settings for the quiz" + category?.id,
  };
}
