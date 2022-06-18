import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articles/articleSlice";

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
