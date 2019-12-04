import { routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(routerMiddleware(history))
  );

  return store;
}
