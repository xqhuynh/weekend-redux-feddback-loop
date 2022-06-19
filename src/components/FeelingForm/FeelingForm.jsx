import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingForm() {
  // Need: useHistory, useDispatch, useSelector hooks

  return (
    <>
      <Header />
      <h3>How are you feeling today?</h3>
      <p>Feeling?</p>
      <input type="number" />
      <button>Next</button>
    </>
  );
}

export default FeelingForm;
