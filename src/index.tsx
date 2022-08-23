import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import "./styles//index.scss";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
