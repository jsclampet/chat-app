import axios from "axios";
import "./LogIn.css";
import { useForm } from "react-hook-form";

interface Props {
  onClick: () => void;
}

const authenticate = (credentials, database) => {
  const user = database.find((row) => {
    return credentials.username === row.username;
  });
  if (!user) return "Username not found";
  if (credentials.password === user.password) return "Authenticated";
  else return "Incorrect Password";
};

const onSubmit = async (data) => {
  const usernameDatabase = await axios.get("http://localhost:3004/users");
  const authResult = authenticate(data, usernameDatabase.data);
  console.log(authResult);
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
