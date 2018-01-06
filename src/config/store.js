import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import logger from "./logger";
import async from "./async";

const middlewares = [logger, async];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
