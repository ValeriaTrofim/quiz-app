import Quiz from "@/app/components/Quiz";
import prisma from "@/prisma/client";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

const QuizPage = () => {
  return <Quiz />;
};

export default QuizPage;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const quiz = await prisma.quiz.findUnique({ where: { id: id } });

  return {
    title: "Quiz App - " + quiz?.title,
    description: "Look through the questions and pick your answers" + quiz?.id,
  };
}
