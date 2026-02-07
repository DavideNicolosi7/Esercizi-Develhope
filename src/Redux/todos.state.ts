import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const todoState = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) =>
      state.filter((todo) => todo.id !== action.payload),
    edit: (state, action: PayloadAction<Todo>) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    toggle: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    set: (_state, action: PayloadAction<Todo[]>) => action.payload,
  },
});
