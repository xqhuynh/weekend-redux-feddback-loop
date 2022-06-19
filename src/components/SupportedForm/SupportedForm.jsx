import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function SupportedForm() {
  // Need: useHistory, useDispatch, useSelector hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // useSelector for feedBackDataToStore() in store
  const feedback = useSelector((store) => store.feedBackDataToStore);

  // function to handle 'next' button click
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (feedback.supportedForm >= 0 && feedback.supportedForm <= 5) {
      // direct to next form with useHistory hook
      history.push("/comments-form");
    } else {
      alert("Please enter a number between 0 and 5");
    }
  };

  return (
    <>
      <Header />
      <h3>How well are you being supported?</h3>
      <h4>Scale of 0 to 5 with 5 being excellent</h4>
      <p>Support?</p>
      <form onSubmit={handleSubmit}>
        {/* use dispatch and set type to 'SET_SUPPORTED_FORM' */}
        <input
          onChange={(event) =>
            dispatch({
              type: "SET_SUPPORTED_FORM",
              payload: event.target.value,
            })
          }
          type="number"
          required
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default SupportedForm;
