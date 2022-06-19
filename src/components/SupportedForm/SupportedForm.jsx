import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function SupportedForm() {
  return (
    <>
      <Header />
      <h3>How well are you being supported?</h3>
      <p>Support?</p>
      <input type="number" />
      <button>Next</button>
    </>
  );
}

export default SupportedForm;
