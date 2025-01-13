import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="max-w-sm bg-transparent hover:bg-slate-800 rounded-lg  ">
      <a href="#">
        <Image
          className="rounded-t-lg"
          src="/cardimg/css.jpg"
          alt="image"
          width={400}
          height={300}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-100">
            CSS Questions
          </h5>
        </a>
        <p className="mb-3 font-normal text-indigo-200">
          Test your CSS skills and unlock your web design potential—try our CSS
          quiz now and see how you stack up!
        </p>
      </div>
    </div>
  );
};

export default Card;
