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
    <div className="container mx-auto  flex min-h-screen  ">
      {quizzes?.map((quiz) => (
        <div key={quiz.id}>
          <Link href="/quiz">
            <h5>{quiz.title}</h5>
            <p>{quiz.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetailPage;
