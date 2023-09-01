import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";
import quesNumberSlice from "./quesNumberSlice";

const store = configureStore({
  reducer: {
    items: questionsSlice,
    number: quesNumberSlice,
  },
});

export default store;
