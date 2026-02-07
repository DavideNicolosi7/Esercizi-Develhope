import { counterState } from "@/store/counter.state";
// import { identityMiddleware } from "@/store/identity.middleware";
// import { loggingMiddleware } from "@/store/logging.middleware";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { usersSlice } from "./usersSlice";

import todosReducer from "./TodosReducer";

export const rootReducer = combineReducers({
  counter: counterState.reducer,
  todo: todosReducer,
  users: usersSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(identityMiddleware, loggingMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;
export const useAppDispatch = useDispatch as () => AppDispatch;
