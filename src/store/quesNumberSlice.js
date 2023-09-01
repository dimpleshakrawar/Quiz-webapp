import { createSlice } from "@reduxjs/toolkit";

const quesNumberSlice = createSlice({
  name: "number",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      if (state.count === 14) {
        state.count = 0;
      } else {
        state.count += 1;
      }
    },
    decrement: (state) => {
      if (state.count === 0) {
        state.count = 1;
      } else {
        state.count -= 1;
      }
    },
  },
});

export const { increment, decrement } = quesNumberSlice.actions;

export default quesNumberSlice.reducer;
