import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  return (
    <div className="flex justify-between w-full mt-4 text-cyan-500">
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        className="w-[49%] py-3 bg-cyan-950 rounded-lg"
      >
        Previous
      </button>
      <button
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
        className="w-[49%] py-3 bg-cyan-950 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
