import Main from "./components/Main";
import Search from "./components/Search";
import Clip from "./components/Clip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:value" element={<Search />} />
        <Route path="/clip" element={<Clip />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
