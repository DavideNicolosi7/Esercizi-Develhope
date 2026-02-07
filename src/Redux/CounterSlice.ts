import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      return state + action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      return state - action.payload;
    },
    reset: () => 0,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
