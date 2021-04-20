import { React, useState } from "react";
import "./Login.css";

function Login({ loginUserSuccess }) {
  const [userName, setUserName] = useState("");

  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <label for="username">Username:</label>
        <input
          className="loginInput"
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label for="password">Password:</label>
        <input
          className="loginInput"
          type="password"
          name="password"
          id="password"
        />
        <button
          className="loginButton"
          onClick={() => loginUserSuccess(userName)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
