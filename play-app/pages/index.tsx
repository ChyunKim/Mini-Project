import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import { useQuery } from "react-query";
import Link from "next/link";
import { Nav } from "./components/Nav";
import { getAPI, useAPI } from "../src/util/api";
import { useAppDispatch } from "../src/redux/hooks";
import { save } from "../src/redux/slice/playSlice";

export interface APIType {
  page: number;
  results: [];
  total_pages: number;
  total_result: number;
}

export interface PlayType {
  id: number | null;
  poster_path: string;
  name: string;
  first_air_date: string;
  overview: string;
}

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  /*
    isLoading 
    isLoading은 처음 로드할 때 => 아직 데이터가 없을때
    첫번째로 어떤 데이터를 가져와서 웹브라우저에 캐시가 있는데 
    같은 쿼리 키의 데이터를 한번 더 호출한다면 isLoading은 무조건 false
  */
  /*
    isFetching 
    isFetching은 데이터를 다시 가져와야 할 때
    캐시가 있어도 데이터를 가져오고 있을때 true, 가져온 후에는 false 반환
  */
  const { data, isLoading } = useQuery<APIType>("play", useAPI, {
    initialData: props.tvpopular,
  });

  console.log(data);
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
      <div className="pl-20 pt-60 pr-20 bg-white text-black">
        <div className="text-xl font-bold mb-10">
          {isLoading ? "Loading..." : "What to see today?"}
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 pb-10">
          {movieCon()}
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await getAPI();
  const tvpopular = res.data;
  return {
    props: { tvpopular },
  };
};
