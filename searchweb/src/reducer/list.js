const INITIALCLIP = [];
export const clipList = (state = INITIALCLIP, action) => {
  switch (action.type) {
    case "CLIP":
      const clip = state.filter((ele) => ele._id !== action.payload._id);
      clip.push(action.payload);
      return (state = clip);
    case "UNCLIP":
      return (state = state.filter((ele) => ele._id !== action.payload._id));
    default:
      return state;
  }
};

const HISTORY_LEN = 5;
export const keywordList = (state = [], action) => {
  switch (action.type) {
    case "SEARCH":
      const history = state.filter((ele) => ele !== action.payload);
      history.length === HISTORY_LEN && history.shift();
      history.push(action.payload);
      return (state = history);
    default:
      return state;
  }
};
