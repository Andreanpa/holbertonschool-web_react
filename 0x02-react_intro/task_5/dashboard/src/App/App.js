import logo from "../assets/logo.PNG";
import React from "react";
import "./App.css";
import { getFooterCopy, getFullYear } from "../utils/utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> School dashboard </h1>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email"> Email: </label>
        <input id="email" type="email" name="email" />

        <label htmlFor="password"> Password: </label>
        <input id="password" name="password" type="password" />

        <button>OK</button>
      </body>
      <hr />
      <footer className="App-footer">
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </footer>
    </div>
  );
}

export default App;
