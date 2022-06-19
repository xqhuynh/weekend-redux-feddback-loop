import Header from "../Header/Header";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function FeelingForm() {
  // Need: useHistory, useDispatch, useSelector hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // useSelector for feedBackDataToStore() in store
  const feedbackObject = useSelector((store) => store.feedbackDataToStore);

  // function to handle 'next' button click
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Conditional to check if number entered is between 0 and 5 inclusive
    switch (
      feedbackObject.feelingForm >= 0 &&
      feedbackObject.feelingForm <= 5
    ) {
      case history.push("/UnderstandingForm"):
        break;
      default:
        swal("Please select a number between 1 and 5", {
          button: "Sure thing!",
        });
    }
  };

  return (
    <>
      <Header />
      <h3>How are you feeling today?</h3>
      <h4>Scale of 0 to 5 with 5 being excellent</h4>
      <p>Feeling?</p>
      <form onSubmit={handleSubmit}>
        {/* use dispatch and set type to 'SET_FEELING_FORM' */}
        <input
          onChange={(event) =>
            dispatch({ type: "SET_FEELING_FORM", payload: event.target.value })
          }
          type="number"
          required
        />
      </form>

      <button type="submit">Next</button>
    </>
  );
}

export default FeelingForm;
