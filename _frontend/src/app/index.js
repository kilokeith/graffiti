import React from "react";
import { hydrate, render } from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
