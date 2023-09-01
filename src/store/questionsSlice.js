import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "items",
  initialState: {
    data: {},
    isSubmitted: false,
  },
  reducers: {
    setMcq: (state, action) => {
      state.data = action.payload;
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const { setMcq, setIsSubmitted } = questionsSlice.actions;

export default questionsSlice.reducer;
