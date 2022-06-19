import { useHistory, Link } from "react-router-dom";

function SuccessForm() {
  const history = useHistory();
  // handle submit function to take user back to first form
  const handleSubmit = () => {
    history.push("/");
  };

  return (
    <>
      <h2>Feedback successful!</h2>
      <h3>Thank you for your feedback</h3>
      <button onSubmit={handleSubmit} type="submit">
        Leave New Feedback
      </button>
    </>
  );
}

export default SuccessForm;
