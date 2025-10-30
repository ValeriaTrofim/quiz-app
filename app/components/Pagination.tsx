"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useGlobalContext } from "../context/GlobalContext";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
  seeResults: () => void;
  isPending: boolean | undefined;
}

const Pagination = ({
  itemCount,
  pageSize,
  currentPage,
  seeResults,
  isPending,
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { activeQuestion, setActiveQuestion } = useGlobalContext();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  const handleNextPage = () => {
    currentPage < pageCount ? changePage(currentPage + 1) : seeResults();
    setActiveQuestion(null);
  };

  return (
    <div className="flex justify-between w-full mt-4 text-cyan-500">
      <button
        disabled={isPending}
        onClick={() =>
          activeQuestion?.id
            ? handleNextPage()
            : toast.error("Please select an option to continue")
        }
        className="w-[100%] py-3 bg-cyan-950 rounded-lg hover:bg-sky-950"
      >
        Submit Answer
      </button>
      <Toaster />
    </div>
  );
};

export default Pagination;
