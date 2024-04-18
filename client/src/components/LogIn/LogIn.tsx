import axios from "axios";
import "./LogIn.css";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  onClick: () => void;
}

const onSubmit = async (data: FieldValues) => {
  try {
    const logIn = await axios.post("http://localhost:3008/login", data);
    console.log(logIn);
  } catch (error) {
    console.log(error);
  }
};

const LogIn = ({ onClick }: Props) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="log-in-container">
      <form className="log-in-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            {...register("password")}
          />
        </div>
        <button type="submit" className="btn btn-primary log-in-btn">
          Log In
        </button>
        <div className="divider">
          <div className="left"></div>
          <p className="divider-text">OR</p>
          <div className="right"></div>
        </div>
        <p>Create an account!</p>
        <button
          className="btn btn-outline-success log-in-btn"
          onClick={onClick}
        >
          Sign Up!
        </button>
      </form>
    </div>
  );
};

export default LogIn;
