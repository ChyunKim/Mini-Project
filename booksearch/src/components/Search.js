import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import unclipmark from "../style/img/unclipmark.svg";
import clipmark from "../style/img/clipmark.svg";
import { useState } from "react";
import { startCase } from "lodash";

const ListContanier = styled.div`
  width: 56%;
  max-width: 800px;
  min-height: 85%;
  margin: 7% 65% 0 10%;
`;

const ListDiv = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding: 20px 0;
`;

const Title = styled.div`
  font-size: 20px;
  color: #0c2d6d;
  margin-bottom: 12px;
  font-weight: bold;
`;

const ATag = styled.a`
  text-decoration-line: none;
  color: inherit;
`;

const ClipIcon = styled.img`
  height: 100%;
  margin: 0 5px;
  vertical-align: -10%;
`;

const Content = styled.div`
  color: #3d3d3d;
  margin-bottom: 8px;
  font-size: 16px;
`;

const Search = () => {
  const dispatch = useDispatch();
  const newslist = useSelector((state) => state.fetch.newslist);
  const [clip, setClip] = useState(unclipmark);

  const params = useParams();

  return (
    <>
      <Nav search={params.value}></Nav>
      <ListContanier>
        {newslist.map((ele) => (
          <ListDiv key={ele._id}>
            <Title>
              {/*타이틀 클릭시 새창으로 이동*/}
              <ATag
                href={ele.web_url}
                target="_blank"
                rel="noreferrer"
                title="Detail view"
              >
                {ele.headline.main.length < 70
                  ? ele.headline.main
                  : `${ele.headline.main.substr(0, 70)}...`}
              </ATag>
              <ClipIcon
                src={clip}
                alt="clipicon"
                onClick={() => {
                  setClip(clipmark);
                  dispatch({ type: "CLIP", payload: ele });
                }}
              ></ClipIcon>
            </Title>
            <Content>{ele.snippet}</Content>
            <Content>{`${ele.pub_date.substr(0, 4)}.${ele.pub_date.substr(
              5,
              2
            )}.${ele.pub_date.substr(8, 2)}`}</Content>
          </ListDiv>
        ))}
      </ListContanier>
    </>
  );
};

export default Search;
