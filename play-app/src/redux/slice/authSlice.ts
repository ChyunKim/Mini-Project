import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { login } = authSlice.actions;
