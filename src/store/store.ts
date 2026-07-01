import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addSingleMeme } from "./slices/ressources";
import { emptyMeme } from "orsys-tjs-meme";
import currentReducer from "./slices/current";
import { initialRessourcesLoad } from "./asyncCaller/asyncRessources";
import modalReducer from "./slices/modal";
export const store = configureStore({
  reducer: {
    ressources: ressourcesReducer,
    current: currentReducer,modal:modalReducer
  },
});
store.subscribe(() => {
  console.groupCollapsed("changement store");
  console.trace("y a un changement:", store.getState());
  console.groupEnd();
});


store.dispatch(initialRessourcesLoad())
/*store.dispatch(addSingleMeme(emptyMeme));
store.dispatch(addSingleMeme(emptyMeme));
store.dispatch(addSingleMeme(emptyMeme));
store.dispatch(addSingleMeme(emptyMeme));
store.dispatch(addSingleMeme(emptyMeme));
store.dispatch(addSingleMeme(emptyMeme));
store.dispatch(addSingleMeme(emptyMeme));
store.dispatch(addSingleMeme(emptyMeme));
*/

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
 