import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function AddCommentButton() {
  const [shouldCrash, setShouldCrash] = useState(false);

  useEffect(() => {
    if (shouldCrash) {
      throw new Error("This component is intentionally crashed!");
    }
  }, [shouldCrash]);

  const handleClick = () => {
    setShouldCrash(true);
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="border shadow-2xl rounded-3xl">
        <img
          className="w-full h-full rounded-t-3xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxcasFejqJ1bb_rg4aj29pDAySdC6ugNHqUg&s"
        />
        <div className="m-4">
          <input
            className="outline-none hover:underline"
            type="text"
            placeholder="Add a comment..."
          />
          <button
            className="cursor-pointer bg-black/80 p-2 text-white rounded-lg"
            onClick={() => handleClick()}
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

