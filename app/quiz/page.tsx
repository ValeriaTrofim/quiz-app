const Quiz = () => {
  const items = [
    "The transparency of an element",
    "The stacking order of elements",
    "The alignment of text inside an element",
    "The margin between elements",
  ];
  return (
    <div className="flex min-h-screen flex-col justify-between p-24 m-5">
      <div className="flex flex-col items-start w-full">
        <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4  ">
          <div className="bg-teal-500 h-2.5 rounded-full w-48"></div>
        </div>
        <h4 className="mt-10 text-xl text-teal-500">Question 1 of 5</h4>
        <div className="mt-4 mb-4 text-2xl text-indigo-200 font-bold">
          What does the CSS z-index property control?
        </div>
        {items.map((item) => (
          <div key={item} className="relative w-full  h-11 mt-3">
            <input
              type="checkbox"
              id={item}
              className="appearance-none border-solid border-2 border-slate-800 rounded-lg cursor-pointer h-full w-full 
                    checked:border-teal-700 transition-all duration-200 hover:border-teal-700"
            ></input>
            <label
              htmlFor={item}
              className="absolute top-[50%] left-3 text-indigo-100   -translate-y-[50%]
                     peer-checked:text-indigo-100 transition-all duration-200 select-none
                "
            >
              {item}
            </label>
          </div>
        ))}

        <div className="flex justify-between w-full mt-4 text-teal-500">
          <button className="w-[49%] py-3 bg-cyan-950 rounded-lg">
            Previous
          </button>
          <button className="w-[49%] py-3 bg-cyan-950 rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
