import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

export const Nav = () => {

  const [value, setValue] = useState<string>("");

  const eventsearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <div className="bg-gray-800 text-white w-full text-lg pb-12 fixed">
        <div className="flex items-center justify-between flex-wrap font-bold pl-20 pr-20">
          <span className="font-bold text-3xl">Play App</span>
          <div className="ml-auto text-xl space-x-9 pt-10 pb-10">
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/register">MY</Link>
          </div>
        </div>
        <div
          className="block pl-20 w-full"
        >
          <form>
            <input
              className="w-1/3 px-4 py-1.5 border text-lg border-gray-300 rounded outline-none text-black mr-5"
              placeholder="Enter the video you want to find.."
              onFocus={() => Router.push("/search")}
              onChange={eventsearch}
            ></input>
            <Link href={`/search/${value}`}>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-4 rounded"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
