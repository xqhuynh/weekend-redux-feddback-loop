import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function FeelingForm() {
  // Need: useHistory, useDispatch, useSelector hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // useSelector for feedBackDataToStore() in store
  const feedback = useSelector((store) => store.feedBackDataToStore);

  // function to handle 'next' button click
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (feedback.feelingForm >= 0 && feedback.feelingForm <= 5) {
      // direct to next form with useHistory hook
      history.push("/second-form");
    } else {
      alert("Please enter a number between 0 and 5");
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
        <button>Next</button>
      </form>
    </>
  );
}

export default FeelingForm;
