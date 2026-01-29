import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "./index.css";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

const queryClient = new QueryClient();
const root = document.getElementById("root")!;

createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
