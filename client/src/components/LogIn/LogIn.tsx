import axios from "axios";
import "./LogIn.css";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  onClick: () => void;
}

const LogIn = ({ onClick }: Props) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setIsAuth(false);
    try {
      const res = await axios.post("http://localhost:3008/login", data);
      res;
      console.log(res);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/messenger");
    }
  }, [isAuth]);

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
