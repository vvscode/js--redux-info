import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import logger from "./logger";
import async from "./async";

const store = createStore(reducers, applyMiddleware(logger, async));

export default store;
