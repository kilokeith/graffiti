import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";

import createRootReducer from "./reducers";

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), createLogger())
    )
  );

  return store;
}
