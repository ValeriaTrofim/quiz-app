const questions = require("../data/tsHardQuestions.js");
let questionsPrisma: any;

async function seedQuestions() {
  const { PrismaClient } = require("@prisma/client");

  questionsPrisma = new PrismaClient();

  for (const question of questions) {
    const createdQuestion = await questionsPrisma.question.create({
      data: {
        text: question.text,
        quizId: "67a21d560a3274441c27d7a7",
        options: {
          create: question.options,
        },
      },
    });

    console.log(`Created question: ${createdQuestion.text}`);
  }
  console.log("Seeding questions completed.");
}

seedQuestions()
  .catch((e) => {
    console.log("Error seeding questions: ", e);
  })
  .finally(async () => {
    await questionsPrisma.$disconnect();
  });
