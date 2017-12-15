import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import logger from "./logger";

const store = createStore(reducers, applyMiddleware(logger));

export default store;
