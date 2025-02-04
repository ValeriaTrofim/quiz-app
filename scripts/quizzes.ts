let quizPrisma: any;

async function addQuizzes() {
  const { PrismaClient } = require("@prisma/client");

  quizPrisma = new PrismaClient();

  const quizzes = [
    {
      title: "Easy Mode",
      description:
        "This quiz covers the basics of CSS in a simple and beginner-friendly way",
      categoryId: "679b7d3a73b60ab02b237bce",
    },
    {
      title: "Hard Mode",
      description:
        "A hard CSS quiz which tests advanced knowledge of CSS, including deep concepts, modern techniques, and tricky behaviors",
      categoryId: "679b7d3a73b60ab02b237bce",
    },
    {
      title: "Easy Mode",
      description:
        "This quiz focuses on the basics of HTML: common elements, structure, and fundamental concepts.",
      categoryId: "679b7d3a73b60ab02b237bcf",
    },
    {
      title: "Hard Mode",
      description:
        "HTML quiz that challenges your understanding of HTML, covers advanced elements, best practices, and edge cases.",
      categoryId: "679b7d3a73b60ab02b237bcf",
    },
    {
      title: "Easy Mode",
      description:
        "Easy JavaScript quiz which focuses on the basic concepts essential for beginners to grasp",
      categoryId: "679b7d3a73b60ab02b237bd0",
    },
    {
      title: "Hard Mode",
      description:
        "JavaScript quiz that challenges the understanding of advanced concepts, tricky behaviors, and modern features",
      categoryId: "679b7d3a73b60ab02b237bd0",
    },
    {
      title: "Easy Mode",
      description: "React quiz that covers fundamental concepts for beginners",
      categoryId: "679b7d3a73b60ab02b237bd1",
    },
    {
      title: "Hard Mode",
      description:
        "React quiz which tests advanced concepts and best practices",
      categoryId: "679b7d3a73b60ab02b237bd1",
    },
    {
      title: "Easy Mode",
      description:
        "This quiz focuses on core concepts that help beginners build a solid foundation for writing type-safe and maintainable code in TypeScript",
      categoryId: "679b7d3a73b60ab02b237bd2",
    },
    {
      title: "Hard Mode",
      description:
        " TypeScript quiz which tests advanced concepts, best practices, and real-world problem-solving skills",
      categoryId: "679b7d3a73b60ab02b237bd2",
    },
  ];

  for (const quiz of quizzes) {
    await quizPrisma.quiz.create({
      data: quiz,
    });
  }
}

addQuizzes()
  .catch((e) => {
    console.log("Error adding quizzes: ", e);
  })
  .finally(async () => {
    await quizPrisma.$disconnect();
  });
