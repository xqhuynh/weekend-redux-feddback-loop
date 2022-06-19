import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import components
import FeelingForm from "../FeelingForm/FeelingForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportedForm from "../SupportedForm/SupportedForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import ReviewForm from "../ReviewForm/ReviewForm";
import SuccessForm from "../SuccessForm/SucessForm";
import { useDispatch } from "react-redux";

function App() {
  // bring in useState hook
  const dispatch = useDispatch();
  // Axios GET to retrive data from db
  const getFeedback = () => {
    axios({});
  };

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <FeelingForm />
        </Route>
        <Route path="/second-form">
          <UnderstandingForm />
        </Route>
        <Route path="/third-form">
          <SupportedForm />
        </Route>
        <Route path="/comments-form">
          <CommentsForm />
        </Route>
        <Route path="/review-form">
          <ReviewForm />
        </Route>
        <Route path="/success-form">
          <SuccessForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
