import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchnews } from "../reducer/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const NavBar = styled.div`
  position: fixed;
  min-width: 900px;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  display: flex;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  background-color: white;
  align-items: center;
  padding: 0px;
`;

const InputBox = styled.input`
  width: 70%;
  height: 50%;
  border: 1px solid #585858;
  padding-left: 20px;
  border-radius: 3px;
  margin: 0 8%;
  &:focus {
    outline: none;
  }
`;

const ClipBtn = styled.button`
  width: 70px;
  height: 40px;
  background: #0c2d6d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  color: #eeeeee;
  margin: 0 5%;
  margin-left: auto;
`;

const Nav = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchnews(dispatch, props.search, 1);
  }, []);

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
  return (
    <NavBar>
      <InputBox defaultValue={props.search} onChange={eventInput} />
      <Link to="/clip">
        <ClipBtn type="submit">Clips</ClipBtn>
      </Link>
    </NavBar>
  );
};

export default Nav;
