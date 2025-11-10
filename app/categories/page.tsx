import { Metadata } from "next";
import Card from "../components/Card";

const Categories = () => {
  return (
    <div className="container mx-auto  flex min-h-screen  flex-col justify-between p-[6rem]">
      <Card />
    </div>
  );
};

export default Categories;

export const metadata: Metadata = {
  title: "Quiz App - Categories",
  description: "View the categories for quizzes",
};
