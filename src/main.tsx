import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "./index.css";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();
const root = document.getElementById("root")!;

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
