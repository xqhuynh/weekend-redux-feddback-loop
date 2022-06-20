import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// Reducer to store feedback object
// will need 4 objects: feeling, understanding, supported
// with initial value set to 0 and comments set to empty string
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
  // Need dispatch to clear form after successful form submission
  switch (action.type) {
    case "SET_FEELING_FORM":
      return { ...state, feelingForm: action.payload };
    case "SET_UNDERSTANDING_FORM":
      return { ...state, understandingForm: action.payload };
    case "SET_SUPPORTED_FORM":
      return { ...state, supportedForm: action.payload };
    case "SET_COMMENTS_FORM":
      return { ...state, commentsForm: action.payload };
    case "CLEAR_FEEDBACK":
      return {
        feelingForm: "",
        understandingForm: "",
        supportedForm: "",
        commentsForm: "",
      };
    default:
      return state;
  }
};

// redux store, try to minimize reducers
const store = createStore(
  combineReducers({
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
