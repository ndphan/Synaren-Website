import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "uikit";
import ReactAI from "react-appinsights";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
ReactAI.init(
  { instrumentationKey: "4962a06e-429d-4207-9232-2f216a3819ee" },
  history
);
ReactAI.ai().trackPageView("Synaren", window.location);

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();

if (process.env.NODE_ENV === "production") {
  console.warn = () => {};
}
