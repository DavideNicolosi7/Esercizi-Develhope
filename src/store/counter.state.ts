import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterState = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action: PayloadAction<number>) => state - action.payload,
    reset: (_state, action: PayloadAction<number | undefined>) =>
      action.payload ?? 0,
  },
});
