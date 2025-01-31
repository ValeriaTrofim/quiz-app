let catPrisma: any;

async function addCategories() {
  const { PrismaClient } = require("@prisma/client");

  catPrisma = new PrismaClient();

  const categories = [
    {
      name: "CSS",
      description: "Check if you're a styling pro",
    },
    {
      name: "HTML",
      description: "Show off your web-building skills",
    },
    {
      name: "JS",
      description: "Put your JavaScript skills to the test",
    },
    {
      name: "React",
      description: "See if you can keep up with the state",
    },
    {
      name: "TS",
      description: "Add some type safety to your skills",
    },
  ];

  for (const category of categories) {
    await catPrisma.category.create({
      data: category,
    });
  }
}

addCategories()
  .catch((e) => {
    console.log("Error Adding Categories: ", e);
  })
  .finally(async () => {
    await catPrisma.$disconnect();
  });
