import Image from "next/image";
import Link from "next/link";

const Card = () => {
  const cardArray = [
    { id: 1, title: "CSS", image: "css" },
    { id: 2, title: "HTML", image: "html5" },
    { id: 3, title: "JS", image: "js" },
    { id: 4, title: "React", image: "react" },
    { id: 5, title: "TS", image: "ts" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardArray.map((item, id) => (
        <div
          key={id}
          className="max-w-sm bg-transparent hover:bg-slate-800 rounded-lg  "
        >
          <Link href="/quiz">
            <Image
              className="rounded-t-lg"
              src={"/assets/" + item.image + ".png"}
              alt="image"
              width={400}
              height={300}
            />
          </Link>
          <div className="p-5">
            <Link href="/quiz">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-indigo-100 ">
                {item.title + " " + "Quiz"}
              </h5>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
