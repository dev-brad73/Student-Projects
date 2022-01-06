import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const userObject = {
      email: email,
      password: password,
    };

    try {
      const user = await axios.post("users/login", userObject);
      localStorage.setItem("user", JSON.stringify(user.data));
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };
  return (
    <div className="loginContainer">
      <div className="loginTitleContainer"></div>
      <span className="loginTitle">Welcome to the Database!</span>
      <span className="loginDescription"> Log-in</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="inputContainer">
          <input
            className="loginInput"
            type="email"
            name="email"
            placeholder="email"
            required
            ref={emailRef}
          />
        </div>
        <div className="inputContainer">
          <input
            className="loginInput"
            type="password"
            name="password"
            placeholder="password"
            required
            ref={passwordRef}
          />
        </div>
        <div className="inputButtonsContainer">
          <button className="loginBtn" type="submit">
            Log-in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
