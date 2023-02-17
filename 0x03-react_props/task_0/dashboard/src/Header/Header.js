import logo from "../assets/logo.PNG";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> School dashboard </h1>
    </header>
  );
}

export default Header;
