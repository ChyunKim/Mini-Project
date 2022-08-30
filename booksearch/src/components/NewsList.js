import Nav from "./Nav";
import styled from "styled-components";
import unclipmark from "../style/img/unclipmark.svg";
import clipmark from "../style/img/clipmark.svg";
import { useDispatch, useSelector } from "react-redux";

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

const NewsList = (props) => {
  const dispatch = useDispatch();
  const cliplist = useSelector((state) => state.clip);
  const clip = cliplist.map((ele) => ele._id);

  return (
    <>
      <ListContanier>
        {props.list.map((ele) => (
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
                src={clip.indexOf(ele._id) === -1 ? unclipmark : clipmark}
                alt="clipicon"
                onClick={() => {
                  clip.indexOf(ele._id) !== -1
                    ? dispatch({ type: "UNCLIP", payload: ele })
                    : dispatch({ type: "CLIP", payload: ele });
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

export default NewsList;
