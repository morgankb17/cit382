import { StrictMode } from "react";
import CanvasAnimation from "./CanvasAnimation.js";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CanvasAnimation />
  </StrictMode>,
  rootElement
);
