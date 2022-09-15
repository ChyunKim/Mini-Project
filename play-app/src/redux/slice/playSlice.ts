import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayType } from "../../../pages/index";

interface PlayState {
  content: Array<PlayType> | Array<any>;
}
const INITIAL_STATE: PlayState = {
  content: [
    {
      id: null,
      poster_path: "",
      name: "",
      first_air_date: "",
      overview: "",
    },
  ],
};

export const playSlice = createSlice({
  name: "play",
  initialState: INITIAL_STATE,
  reducers: {
    save: (state, action: PayloadAction<PlayType>) => {
      const contentid = state.content.map((ele) => ele.id);
      if (contentid.includes(action.payload.id)) {
        return;
      } else {
        state.content = state.content.concat(action.payload);
      }
    },
  },
});

export const { save } = playSlice.actions;
