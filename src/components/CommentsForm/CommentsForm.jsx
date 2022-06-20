import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CommentsForm() {
  // Need: useHistory, useDispatch  hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // function to handle 'next' button click
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // useHistory to go to 'review-form'
    history.push("/review-form");
  };

  return (
    <>
      <Header />
      <h3>Any comments you want to leave?</h3>
      <p>Comments?</p>
      {/* add handleSubmit() in form tag */}
      <form onSubmit={handleSubmit}>
        {/* use dispatch and set type to 'SET_COMMENTS_FORM' in input */}
        <input
          onChange={(event) =>
            dispatch({
              type: "SET_COMMENTS_FORM",
              payload: event.target.value,
            })
          }
          type="text"
        />
        <button>Next</button>
      </form>
    </>
  );
}

export default CommentsForm;
