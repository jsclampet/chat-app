import "./NotFound.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404 NOT FOUND!</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default Error;
