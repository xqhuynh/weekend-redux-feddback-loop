import React from "react";
import axios from "axios";
import "./App.css";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";

function App() {
  // Call useDispatch
  const dispatch = useDispatch();
  // Axios GET function to retrieve db and use dispatch
  const fetchFeedback = () => {
    axios
      .get({
        method: "GET",
        url: "/feedback",
      })
      .then((response) => {
        dispatch({
          type: "SET_FEEDBACK_LIST",
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Axios GET error", err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Header fetchFeedback={fetchFeedback} />
    </div>
  );
}

export default App;
