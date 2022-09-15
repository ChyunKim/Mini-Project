import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "../../src/redux/hooks";
import { useRouter } from "next/router";
import Router from "next/router";

export const Nav = () => {
  const authname = useAppSelector((state) => state.auth.name);
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const eventsearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <Link href={authname ? "/my" : "/register"}>MY</Link>
          </div>
        </div>
        <div
          className={
            router.pathname === "/my" ? "block pl-20 w-full" : " hidden"
          }
        >
          <span className="font-bold text-2xl">{authname}'s account</span>
        </div>
        <div
          className={
            router.pathname === "/my" ? "hidden" : "block pl-20 w-full"
          }
        >
          <form>
            <input
              className="w-1/3 px-4 py-1.5 border text-lg border-gray-300 rounded outline-none text-black mr-5"
              placeholder="Enter the video you want to find.."
              onChange={eventsearch}
            ></input>
            <Link href={`/search/${value}`}>
                <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-4 rounded"
                type="submit"
                onClick={ () => Router.push("/search") }
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
