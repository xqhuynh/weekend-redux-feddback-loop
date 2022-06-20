import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function SuccessForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Handle submit function w/dispatch action to clear
  // form data after submit form successful
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "CLEAR_FEEDBACK",
    });
    // useHistory for home route '/'
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
