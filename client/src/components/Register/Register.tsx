import axios from "axios";
import "./Register.css";
import { useForm } from "react-hook-form";

interface Props {
  onClick: () => void;
}

const Register = ({ onClick }: Props) => {
  const { register, handleSubmit } = useForm();
  const createAccount = async (userInput) => {
    try {
      const response = await axios.post(
        "http://localhost:3004/signup",
        userInput
      );
      console.log(
        "createAccount function ||  response >>> frontend|axios",
        response
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <form
        className="log-in-form"
        onSubmit={handleSubmit((data) => {
          createAccount(data);
          console.log("react-hook-form Data >>> >>> >> ", data);
        })}
      >
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
          <label htmlFor="registration-password">Password</label>
          <input
            type="password"
            id="registration-password"
            className="form-control"
            {...register("password")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success log-in-btn">
          Register
        </button>
        <div className="divider">
          <div className="left"></div>
          <p className="divider-text">OR</p>
          <div className="right"></div>
        </div>
        <p>Already have an account?</p>
        <button
          className="btn btn-outline-primary log-in-btn"
          onClick={onClick}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Register;
