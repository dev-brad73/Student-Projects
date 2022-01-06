import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Login() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const userObject = {
      username: username,
      email: email,
      password: password,
    };

    try {
      await axios.post("users/register", userObject);
      console.log("New user created");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginSignupContainer">
      <div className="loginSignupTitleContainer">
        <span className="loginSignupTitle">Welcome to the Database!</span>
        <span className="loginSignupDescription"> Log-in or Sign-up</span>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="inputSignupContainer">
          <input
            className="loginSignupInput"
            type="text"
            name="username"
            placeholder="username"
            required
            ref={usernameRef}
          />
        </div>
        <div className="inputSignupContainer">
          <input
            className="loginInput"
            type="email"
            name="email"
            placeholder="email"
            required
            ref={emailRef}
          />
        </div>
        <div className="inputSignupContainer">
          <input
            className="loginInput"
            type="password"
            name="password"
            placeholder="password"
            required
            ref={passwordRef}
          />
        </div>
        <div className="loginSignupButtonsContainer">
          <button className="loginSignupBtn" onClick={() => navigate("/login")}>
            Log-in
          </button>
          <button className="loginSignupBtn" type="submit">
            Sign-up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
