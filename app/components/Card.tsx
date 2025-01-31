"use client";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Spinner from "./Spinner";

const Card = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => axios.get("/api/categories").then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories?.map((category) => (
        <div
          key={category.id}
          className="max-w-sm bg-transparent hover:bg-slate-800 rounded-lg  "
        >
          <Link href="/quiz">
            <Image
              className="rounded-t-lg"
              src={"/assets/" + category.image + ".png"}
              alt="image"
              width={400}
              height={300}
            />
          </Link>
          <div className="p-5">
            <Link href="/quiz">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-indigo-100 ">
                {category.name + " " + "Quiz"}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-center text-indigo-200">
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
