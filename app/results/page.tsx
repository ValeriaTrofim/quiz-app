import { Metadata } from "next";
import Results from "../components/Results";

const page = () => {
  return <Results />;
};

export default page;

export const metadata: Metadata = {
  title: "Quiz App - Results",
  description: "View your score",
};
