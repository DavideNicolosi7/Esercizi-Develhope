import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import axios from "axios";

export type User = {
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
};

export const usersState = createSlice({
  name: "users",
  initialState: [] as User[],
  reducers: {
    set: (_state, action: PayloadAction<User[]>) => action.payload,
    clear: () => [],
  },
});

export function getUsers() {
  return async function (dispatch: AppDispatch) {
    const response = await axios.get<User[]>("https://api.github.com/users");
    const data = response.data;

    dispatch(usersState.actions.set(data));
  };
}
