import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function UnderstandingForm() {
  // Need: useHistory, useDispatch, useSelector hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // useSelector for feedBackDataToStore() in store
  const feedback = useSelector((store) => store.feedBackDataToStore);

  // function to handle 'next' button click
  // conditional statement to make sure number entered is between 0 to 5
  // and not empty before navigating to next form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (feedback.understandingForm >= 0 && feedback.understandingForm <= 5) {
      // direct to next form with useHistory hook
      history.push("/third-form");
    } else {
      alert("Please enter a number between 0 and 5");
    }
  };

  return (
    <>
      <Header />
      <h3>How well are you understanding the content?</h3>
      <h4>Scale of 0 to 5 with 5 being excellent</h4>
      <p>Understanding?</p>
      <form onSubmit={handleSubmit}>
        {/* use dispatch and set type to 'SET_UNDERSTANDING_FORM' */}
        <input
          onChange={(event) =>
            dispatch({
              type: "SET_UNDERSTANDING_FORM",
              payload: event.target.value,
            })
          }
          type="number"
          required
        />
        <button>Next</button>
      </form>
    </>
  );
}

export default UnderstandingForm;
