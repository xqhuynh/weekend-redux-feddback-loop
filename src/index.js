import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// Reducer to get feedback data from user
const feedBackReducer = (state = [], action) => {
  switch (action.type) {
    // GET dispatch action
    case "GET_FEEDBACK_INFO":
      return action.payload;
    default:
      return state;
  }
};

// redux store
const store = createStore(
  combineReducers({
    feedBackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
