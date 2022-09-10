import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import NewsList from "./NewsList";

const Search = () => {
  const cliplist = useSelector((state) => state.clip);

  console.log(cliplist);
  return (
    <>
      <Nav></Nav>
      <NewsList list={cliplist} />
    </>
  );
};

export default Search;
