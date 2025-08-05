"use server";

import prisma from "@/prisma/client";

export async function getPaginatedQuestions(
  id: string,
  pageSize: number,
  page: number
) {
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

  return { questions, questionCount };
}
