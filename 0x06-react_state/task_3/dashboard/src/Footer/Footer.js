import React from "react";
import "./Footer.js";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

function Footer() {
  return (
    <footer className={css(styles.footer)}>
      <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
    </footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTop: "3px solid #e1345b",
  },
});
export default Footer;
