import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  name: string;
  login: string;
};

type UsersState = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addUser, removeUser, setLoading, setError } = usersSlice.actions;

export default usersSlice.reducer;

export const fetchUser = (username: string) => async (dispatch: any) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("errore caricamento utenti");
    }
    const data = await response.json();
    dispatch(
      addUser({
        id: data.id,
        name: data.name || data.login,
        login: data.login,
      }),
    );
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
