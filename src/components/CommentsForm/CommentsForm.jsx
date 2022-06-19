import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function CommentsForm() {
  // Need: useHistory, useDispatch, useSelector hooks
  const history = useHistory();
  const dispatch = useDispatch();
  // useSelector for feedBackDataToStore() in store
  const feedback = useSelector((store) => store.feedBackDataToStore);

  // function to handle 'next' button click
  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push("/review-form");
  };

  return (
    <>
      <Header />
      <h3>Any comments you want to leave?</h3>
      <p>Comments?</p>
      <form onSubmit={handleSubmit}>
        {/* use dispatch and set type to 'SET_COMMENTS_FORM' */}
        <input
          onChange={(event) =>
            dispatch({
              type: "SET_COMMENTS_FORM",
              payload: event.target.value,
            })
          }
          type="text"
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default CommentsForm;
