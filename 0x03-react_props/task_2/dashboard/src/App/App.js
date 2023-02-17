import React, { Fragment } from "react";
import "./App.css";
import Notification from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Fragment>
      <Notification />
      <header className="App">
        <Header />
      </header>
      <hr />
      <body className="App-body">
        <Login />
      </body>
      <hr />
      <footer className="App-footer">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
