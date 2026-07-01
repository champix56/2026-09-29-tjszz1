import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme, type MemeInterface } from "orsys-tjs-meme";

const initialState: { meme: MemeInterface } = { meme: emptyMeme };

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    update: (state, action: { type: string; payload: MemeInterface }) => {
      state.meme = action.payload;
    },
    clear: (s) => {
      s.meme = emptyMeme;
    },
  },
});

export const { clear, update } = current.actions;

export default current.reducer;
