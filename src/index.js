import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Routing from "./routes/Routes";
import "react-pro-sidebar/dist/css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
