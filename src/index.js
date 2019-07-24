import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "bulma/css/bulma.css";
import "./styles.scss";

import App from "./App";

const store = createStore(reducer);

function reducer() {
  return {
    message: "Hello from reducer!"
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);
