import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <body role="main" className={css(styles.login)}>
      <p>Login to access the full dashboard</p>

      <label htmlFor="email"> Email: </label>
      <input className={css(styles.inp)} type="email" name="email" id="email" />

      <label htmlFor="password"> Password: </label>
      <input
        className={css(styles.inp)}
        id="password"
        name="password"
        type="password"
      />

      <button className={css(styles.button)}>OK</button>
    </body>
  );
}

Login.displayName = "Login";

const styles = StyleSheet.create({
  login: {
    padding: "16px 24px",
  },

  inp: {
    margin: "4px",
  },

  button: {
    margin: "0 2rem",
  },
});

export default Login;
