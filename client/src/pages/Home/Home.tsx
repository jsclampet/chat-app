import { useState } from "react";
import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/Register/Register";
import "./Home.css";

const Home = () => {
  const [isUser, setIsUser] = useState(false);
  const switchView = () => setIsUser(!isUser);
  const content = isUser ? (
    <LogIn onClick={switchView} />
  ) : (
    <Register onClick={switchView} />
  );

  return (
    <>
      <div className={isUser ? "home-container" : "home-container reverse"}>
        <div className="content">
          <h1 className="app-title">ZenChat</h1>
          {isUser ? <p>Member Log-in</p> : <p>Create an account</p>}
          {content}
        </div>
        <div
          className={
            isUser
              ? "home-background-image keyboard-img"
              : "home-background-image stock-model-img"
          }
        ></div>
      </div>
    </>
  );
};

export default Home;
