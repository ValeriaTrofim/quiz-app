import { Metadata } from "next";
import Homepage from "./components/Homepage";

export default function Home() {
  return <Homepage />;
}

export const metadata: Metadata = {
  title: "Quiz App - Homepage",
  description: "View the quiz app home page",
};
