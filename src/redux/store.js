import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";
import { saveData } from "../saveData";

const store = configureStore({
  reducer: todosReducer,
});

store.subscribe(() => {
  saveData(store.getState().items);
});

export default store;
