import "./Register.css";

interface Props {
  onClick: () => void;
}

const Register = ({ onClick }: Props) => {
  return (
    <div className="register-container">
      <form className="log-in-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" />
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
