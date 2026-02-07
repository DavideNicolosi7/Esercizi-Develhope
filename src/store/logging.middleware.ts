import { Middleware } from "redux";
import { RootState } from "./store";

export const loggingMiddleware: Middleware<{}, RootState> =
  (_state) => (next) => (action) => {
    console.log("Action received", action);

    return next(action);
  };
