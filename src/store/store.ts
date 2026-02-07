import { counterState } from "./counter.state";
import { identityMiddleware } from "./identity.middleware";
import { loggingMiddleware } from "./logging.middleware";
import { todoState } from "./todos.state";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "@/Redux/usersSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const rootReducer = combineReducers({
  counter: counterState.reducer,
  todo: todoState.reducer,
  users: usersSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(identityMiddleware, loggingMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;
export const useAppDispatch = useDispatch as () => AppDispatch;
