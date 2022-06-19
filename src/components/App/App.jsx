import React from "react";
import axios from "axios";
import "./App.css";
// import components
import FeelingForm from "../FeelingForm/FeelingForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportedForm from "../SupportedForm/SupportedForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import ReviewForm from "../ReviewForm/ReviewForm";
// import { useDispatch } from "react-redux";

function App() {
  // // Call useDispatch
  // const dispatch = useDispatch();
  // // Axios GET function to retrieve db and use dispatch on admin page
  // const fetchFeedback = () => {
  //   axios
  //     .get({
  //       method: "GET",
  //       url: "/feedback",
  //     })
  //     .then((response) => {
  //       dispatch({
  //         type: "SET_FEEDBACK_LIST",
  //         payload: response.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Axios GET error", err);
  //     });
  // };

  return (
    <div className="App">
      <FeelingForm />
      <UnderstandingForm />
      <SupportedForm />
      <CommentsForm />
      <ReviewForm />
    </div>
  );
}

export default App;
