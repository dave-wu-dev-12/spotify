import React from "react";
import "./Login.css";

function Login({ loginUserSuccess }) {
  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <label for="username">Username:</label>
        <input
          className="loginInput"
          type="text"
          name="username"
          id="username"
        />
        <label for="password">Password:</label>
        <input
          className="loginInput"
          type="password"
          name="password"
          id="password"
        />
        <button className="loginButton" onClick={loginUserSuccess}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
