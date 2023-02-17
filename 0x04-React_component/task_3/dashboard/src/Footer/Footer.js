import React from "react";
import "./Footer.js";
import { getFooterCopy, getFullYear } from "../utils/utils";

function Footer() {
  return (
    <footer className="App-footer">
      <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
    </footer>
  );
}

export default Footer;
