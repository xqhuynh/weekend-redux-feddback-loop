import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// Reducer to get feedback data from user
const storedFeedback = (state = [], action) => {
  switch (action.type) {
    // GET dispatch action
    case "GET_FEEDBACK_INFO":
      return action.payload;
    default:
      return state;
  }
};

// Reducer to store feedback object
const feedBackDataToStore = (
  state = {
    feelingForm: 0,
    understandingForm: 0,
    supportedForm: 0,
    commentsForm: "",
  },
  action
) => {
  // Switch statement for each form dispatch
  switch (action.type) {
    case "SET_FEELING_FORM":
      return { ...state, feelingForm: action.payload };
    case "SET_UNDERSTANDING_FORM":
      return { ...state, understandingForm: action.payload };
    case "SET_SUPPORTED_FORM":
      return { ...state, supportedForm: action.payload };
    case "SET_COMMENTS_FORM":
      return { ...state, commentsForm: action.payload };
    default:
      return state;
  }
};

// redux store
const store = createStore(
  combineReducers({
    storedFeedback,
    feedBackDataToStore,
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
