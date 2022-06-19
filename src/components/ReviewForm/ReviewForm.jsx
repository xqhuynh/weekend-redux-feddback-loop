import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function ReviewForm() {
  // Need: useHistory, useDispatch, useSelector hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // useSelector for feedBackDataToStore() in store
  const feedback = useSelector((store) => store.feedbackDataToStore);

  // function to handle 'submit' button click
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // direct to next form with useHistory hook
    history.push("/success-form");
    addFeedback();
  };

  // Axios POST to add data to db
  const addFeedback = () => {
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
      <h3>Feelings: </h3>
      <h3>Understanding:</h3>
      <h3>Support:</h3>
      <h3>Comments:</h3>
      <form onSubmit={handleSubmit}>
        <Link to={"/success-form"}>
          <button type="submit">Submit</button>
        </Link>
      </form>
    </>
  );
}

export default ReviewForm;
