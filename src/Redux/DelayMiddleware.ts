import { Middleware } from "redux";
import { RootState } from "./StoreCombinato";

export const delayMiddleware: Middleware<{}, RootState> =
  (_store) => (next) => (action) => {
    return setTimeout(() => {
      next(action);
    }, 2500);
  };
