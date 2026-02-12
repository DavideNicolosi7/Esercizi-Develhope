import { createRoot } from "react-dom/client";

import "./index.css";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

import { Root } from "./Router/Root";

const root = document.getElementById("root")!;

createRoot(root).render(<Root />);
