import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import UIkit from "uikit";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'react-app-polyfill/ie11';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

const history = createBrowserHistory();

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
