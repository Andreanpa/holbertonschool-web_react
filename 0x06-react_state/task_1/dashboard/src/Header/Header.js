import logo from "../assets/logo.PNG";
import React from "react";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.logo)} src={logo} alt="logo" />
      <h1 className={css(styles.heading)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottom: "3px solid #e1345b",
    height: "250px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: "200px",
    height: "200px",
  },
  heading: {
    display: "inline",
    position: "relative",
    color: "#e1345b",
  },
});

export default Header;
