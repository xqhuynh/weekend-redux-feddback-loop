import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const onHandleClick = () => {
    history.push("/first-form");
  };

  return (
    <>
      <h1>Click to give feedback</h1>
      <button onClick={onHandleClick}>Start Feedback</button>
    </>
  );
}

export default Home;
