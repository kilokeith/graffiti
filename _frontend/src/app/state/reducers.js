import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// combine all of the reducers here
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history)
  });

export default createRootReducer;
