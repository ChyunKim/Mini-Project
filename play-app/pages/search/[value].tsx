import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { Nav } from "../components/Nav";
import { getSearch, useSearch } from "../../src/util/api";
import { useQuery } from "react-query";
import { APIType, PlayType } from "../index";
import Link from "next/link";
import { useAppDispatch } from "../../src/redux/hooks";
import { save } from "../../src/redux/slice/playSlice";

const Searchpage = (

  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log(props.searchtv);

  const { data, isLoading } = useQuery<APIType>(
    "play",
    () => useSearch(props.value),
    {
      initialData: props.searchtv,
    }
  );

  const dispatch = useAppDispatch();

 
  const movieCon = (): JSX.Element[] | undefined => {
    const content = data?.results.map((ele: PlayType) => {
      const detail: PlayType = {
        id: ele.id,
        poster_path: ele.poster_path,
        name: ele.name,
        first_air_date: ele.first_air_date,
        overview: ele.overview,
      };

      return (
        <div key={detail.id}>
          <Link href={`/view/${detail.id}`}>
            {ele.poster_path ? (
              <img
                className="mb-2 cursor-pointer"
                src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
                alt="img"
                onClick={() => dispatch(save(detail))}
              ></img>
            ) : (
              detail.name
            )}
          </Link>
        </div>
      );
    });
    return content;
  };

  return (
    <>
      <Nav />
      <div className="pt-60 pl-20 pr-20 text-2xl font-bold mb-10 text-black">
        <div className="text-xl font-bold mb-10">
          {isLoading ? "Loading..." : "Search Results 🔍"}
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 pb-10">
          {movieCon()}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (props) => {
  const value = props.query.value;
  const res = await getSearch(value);
  const searchtv = res.data;
  return {
    props: { searchtv, value },
  };
};

export default Searchpage;
