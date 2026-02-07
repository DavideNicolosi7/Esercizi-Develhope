import { Middleware } from "redux";
import { RootState } from "./store";

export const identityMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    next(action);
  };
