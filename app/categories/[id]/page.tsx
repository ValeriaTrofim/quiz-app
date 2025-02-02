import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

const CategoryDetailPage = async ({ params }: { params: { id: string } }) => {
  const category = await prisma.category.findUnique({
    where: { id: params.id },
  });

  if (!category) notFound;

  return (
    <div className="container mx-auto  flex min-h-screen  flex-col justify-between p-24">
      CategoryDetailPage
    </div>
  );
};

export default CategoryDetailPage;
