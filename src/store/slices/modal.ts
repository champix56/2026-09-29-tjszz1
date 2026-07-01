import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shown: false,
  message: "",
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    close: (s) => {
      s.shown = false;
      s.message = "";
    },
    show: (s, a: { type: string; payload: string }) => {
      s.shown = true;
      s.message = a.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      (a: { type: string }) => {
        return a.type.endsWith("pending");
      },
      (s, a) => {
        s.shown = true;
        s.message = "chargement en cours";
      },
    );
    builder.addMatcher(
      (a: { type: string }) => {
        return a.type.endsWith("fulfilled");
      },
      (s, a) => {
        s.shown = false;
        s.message = "";
      },
    );
  },
});

export const { show, close } = modal.actions;

const modalReducer = modal.reducer;
export default modalReducer;
