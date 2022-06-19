import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function ReviewForm({ getFeedback }) {
  // Need: useHistory, useDispatch, useSelector hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // useSelector for feedBackDataToStore() in store
  const feedback = useSelector((store) => store.feedBackDataToStore);
  console.log("Feedback object is", feedback);

  // Axios POST to add data to db after submit button clicked
  const onSubmitFeedback = (evt) => {
    evt.preventDefault();
    axios({
      method: "POST",
      url: "/feedback",
      data: feedback,
    })
      .then((response) => {
        console.log("Add new feedback successful", response);
        console.log("Feedback is", feedback);
        // dispatch action to clear reducer that stored feedback info
        dispatch({
          type: "CLEAR_FEEDBACK",
        });
        history.push("/success-form");
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
      <h3>Support:{feedback.supportedForm}</h3>
      <h3>Comments:{feedback.commentsForm}</h3>
      <form onSubmit={onSubmitFeedback}>
        <Link to={"/success-form"}>
          <button type="submit">Submit</button>
        </Link>
      </form>
    </>
  );
}

export default ReviewForm;
