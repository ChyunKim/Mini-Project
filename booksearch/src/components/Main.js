import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchnews } from "../reducer/api";
import { useNavigate } from "react-router-dom";

const BookContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(0deg, #ebf5fb 50%, #b8c4e3 100%);
`;

const SearchWrapper = styled.div`
  padding: 50px;
  text-align: center;
}
`;

const Title = styled.h1`
  color: #585858;
  font-family: "Gugi";
  font-size: 60px;
  margin: 150px 0 70px;
`;

const SearchInput = styled.input`
  width: 75%;
  height: 60px;
  border: 3px solid #585858;
  padding-left: 20px;
  border-radius: 3px;

  &:focus {
    outline: none;
  }

  ${DropDown} : active & {
    display: block;
  }
  ${DropDown} : focus & {
    display: block;
  }
`;

const DropDown = styled.button`
  border: none;
  outline: none;
  position: relative;
  width: 80px;
`;

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const key = useSelector((state) => state.keyword);

  const eventInput = (e) => {
    const value = e.target.value;
    setTimeout(() => {
      const time = setInterval(() => {
        if (value === e.target.value) {
          clearInterval(time);
          dispatch({ type: "SEARCH", payload: value });
          fetchnews(dispatch, value, 1);
          navigate(`/search/${value}`);
        }
      }, 1000);
    }, 1000);
  };

  console.log(key);

  return (
    <>
      <BookContainer>
        <SearchWrapper>
          <Title>NEWS LIST SEARCH</Title>
          <DropDown>
            <SearchInput
              type="text"
              placeholder="Please enter search keyword"
              onChange={eventInput}
            ></SearchInput>
          </DropDown>
        </SearchWrapper>
      </BookContainer>
    </>
  );
};
export default Main;
