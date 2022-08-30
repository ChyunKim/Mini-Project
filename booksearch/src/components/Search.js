import Nav from "./Nav";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NewsList from "./NewsList";

const Search = () => {
  const newslist = useSelector((state) => state.fetch.newslist);

  const params = useParams();

  return (
    <>
      <Nav search={params.value}></Nav>
      <NewsList list={newslist} />
    </>
  );
};

export default Search;
