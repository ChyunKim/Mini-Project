import { Nav } from "./components/Nav";
import { useAppSelector } from "../src/redux/hooks";
const my = () => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <>
      <Nav />
    </>
  );
};

export default my;
