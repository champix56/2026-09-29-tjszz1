import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addSingleMeme } from "./slices/ressources";
import { emptyMeme } from "orsys-tjs-meme";


const dummyReducer = (state = {}) => {
  return state;
};
export const store = configureStore({ reducer: ressourcesReducer });
store.subscribe(() => {
  console.groupCollapsed("changement store");
  console.trace("y a un changement:", store.getState());
  console.groupEnd();
});

store.dispatch(addSingleMeme(emptyMeme))
store.dispatch(addSingleMeme(emptyMeme))
store.dispatch(addSingleMeme(emptyMeme))
store.dispatch(addSingleMeme(emptyMeme))
store.dispatch(addSingleMeme(emptyMeme))
store.dispatch(addSingleMeme(emptyMeme))
store.dispatch(addSingleMeme(emptyMeme))
store.dispatch(addSingleMeme(emptyMeme))