import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ReviewForm() {
  // Need: useHistory, useSelector hooks
  const history = useHistory();
  // useSelector for feedBackDataToStore() in store
  const feedback = useSelector((store) => store.feedBackDataToStore);
  // console log feedback object to verify it worked
  console.log("Feedback object is", feedback);

  const onHandleSubmit = (evt) => {
    evt.preventDefault();
    // useHistory to navigate to '/success-form'
    history.push("/success-form");
    // Call postFeedback() on submit
    postFeedback();
  };

  // Axios POST to add data to db after submit button clicked
  // remember to call this function in onHandleSubmit()
  // data is 'feedback' from reducer store
  const postFeedback = () => {
    axios({
      method: "POST",
      url: "/feedback",
      data: feedback,
    })
      .then((response) => {
        console.log("Successfully added feedback to db", response);
      })
      .catch((err) => {
        console.log("Error adding feedback", err);
      });
  };

  return (
    <>
      <h2>Review Your Feedback</h2>
      <h3>Feelings: {feedback.feelingForm}</h3>
      <h3>Understanding: {feedback.understandingForm}</h3>
      <h3>Support: {feedback.supportedForm}</h3>
      <h3>Comments: {feedback.commentsForm}</h3>
      <button onClick={onHandleSubmit}>Submit</button>
    </>
  );
}

export default ReviewForm;
