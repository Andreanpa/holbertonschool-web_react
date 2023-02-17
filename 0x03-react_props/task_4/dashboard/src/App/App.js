import Fragment from "react";
import "./App.css";
import Notification from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
  let component = undefined;
  isLoggedIn ? (component = <CourseList />) : (component = <Login />);
  return (
    <Fragment>
      <Notification />
      <header className="App">
        <Header />
      </header>
      <hr />
      <body className="App-body">{component}</body>
      <hr />
      <footer className="App-footer">
        <Footer />
      </footer>
    </Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
