import React from "react";
import "./Login.css";

function Login() {
  return (
    <body className="App-login">
      <p>Login to access the full dashboard</p>

      <label htmlFor="email"> Email: </label>
      <input id="email" type="email" name="email" />

      <label htmlFor="password"> Password: </label>
      <input id="password" name="password" type="password" />

      <button>OK</button>
    </body>
  );
}

export default Login;
