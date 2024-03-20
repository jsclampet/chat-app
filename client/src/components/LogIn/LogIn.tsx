import "./LogIn.css";

interface Props {
  onClick: () => void;
}
const LogIn = ({ onClick }: Props) => {
  return (
    <div className="log-in-container">
      <form className="log-in-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" />
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
