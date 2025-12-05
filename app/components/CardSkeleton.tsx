const CardSkeleton = () => {
  return (
    <div className="max-w-[16rem] animate-pulse bg-gray-800">
      <div className="h-[17rem] animate-pulse bg-gray-600"></div>
      <div className="pt-3 pb-8">
        <div className="h-5 items-center rounded-full mx-auto bg-gray-600 w-28 mt-2.5 mb-4"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
