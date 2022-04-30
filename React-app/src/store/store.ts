import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";

// const store = configureStore({
//     reducer: reducers,
// });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
