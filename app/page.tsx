"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="py-4 flex flex-col gap-4">
        <h1 className="text-4xl font-normal text-center text-indigo-200">
          Welocome to
        </h1>
        <h1 className="text-4xl font-bold text-center">The Frontend Quiz</h1>
        <p className="text-2xl text-center mt-2 font-normal text-indigo-200">
          Chalenge yourself on Frontend topics
        </p>

        <Image src="/homepage.svg" alt="image" width={500} height={300} />
        <button
          onClick={() => router.push("/categories")}
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Playing
        </button>
      </div>
    </div>
  );
}
