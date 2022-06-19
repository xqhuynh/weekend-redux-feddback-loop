import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function SuccessForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedBackDataToStore);

  // Handle submit function
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "CLEAR_FEEDBACK",
    });
    history.push("/");
  };

  return (
    <>
      <h2>Feedback successful!</h2>
      <h3>Thank you for your feedback</h3>
      <button onClick={handleSubmit} type="button">
        Leave New Feedback
      </button>
    </>
  );
}

export default SuccessForm;
