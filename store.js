import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/course";

export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});
