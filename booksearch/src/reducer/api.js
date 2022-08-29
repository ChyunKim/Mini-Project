import axios from "axios";

const INITIALFETCH = {
  loading: false,
  newslist: [],
};

export const fetchRequest = (state = INITIALFETCH, action) => {
  switch (action.type) {
    case "FETCH_NEWS_REQUEST":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_NEWS_SUCCESS":
      return {
        ...state,
        loading: true,
        newslist: action.payload,
      };
    case "FETCH_NEWS_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const fetchnews = (dispatch, keyword, page) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  dispatch({ type: "FETCH_NEWS_REQUEST" });

  axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&page=${page}&api-key=${API_KEY}`
    )
    .then((res) => {
      dispatch({
        type: "FETCH_NEWS_SUCCESS",
        payload: res.data.response.docs,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "FETCH_NEWS_FAILURE" });
    });
};
