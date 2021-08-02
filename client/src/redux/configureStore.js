import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import products from "./features/products";
import cart from "./features/cart";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(
  combineReducers({ products, cart}),
  applyMiddleware(thunk, logger)
);
