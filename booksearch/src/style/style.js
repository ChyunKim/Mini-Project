import styled from "styled-components";

const BookContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(0deg, #ebf5fb 50%, #e3e1b8 100%);
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
  margin: 120px 0 70px;
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
`;
const SearchBtn = styled.button`
  width: 70px;
  height: 66px;
  background-color: #585858;
  border: 3px solid #585858;
  vertical-align: bottom;
  color: white;
  border-radius: 3px;
`;

export const Main = () => {
  return (
    <BookContainer>
      <SearchWrapper>
        <Title>Search Book</Title>
        <SearchInput
          type="text"
          placeholder="Please enter the book you are looking for"
        ></SearchInput>
        <SearchBtn>search</SearchBtn>
      </SearchWrapper>
    </BookContainer>
  );
};
