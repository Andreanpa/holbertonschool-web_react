import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon1.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className={css(styles.wrapper)}>
        <div
          className={css(styles.div, styles["menu-item"])}
          data-testid="menu-item"
        >
          Your Notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.div, styles.notifs)} data-testid="notifs">
            {listNotifications.length ? (
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.list)}>
                  {listNotifications.map(({ id, type, value, html }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </Fragment>
            ) : (
              <p>No new notifications for now</p>
            )}
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img
                src={closeIcon}
                alt="Close"
                style={{ height: "20px", width: "20px" }}
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const screenSize = {
  small: "@media (max-width: 900px)",
};

const opa_Keyframes = {
  from: {
    opacity: "0.5",
  },
  to: {
    opacity: "1",
  },
};

const trans_Y_kf = {
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(5px)",
  },
};

const styles = StyleSheet.create({
  div: {
    padding: "1rem",
    position: "relative",
    margin: "0.5rem",
    [screenSize.small]: {
      padding: "0",
    },
  },
  notifs: {
    border: "1px dashed #e1354b",
    marginTop: "0",
    backgroundColor: "white",
    [screenSize.small]: {
      width: "95vw",
      height: "95vh",
      margin: "0",
      zIndex: "10",
      border: "1px solid lightgray",
      fontSize: "20px",
    },
  },

  "menu-item": {
    marginBottom: 0,
    ":hover": {
      cursor: "pointer",
      animationName: [opa_Keyframes, trans_Y_kf],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
      animationTimingFunction: "ease, ease",
    },
  },

  list: {
    [screenSize.small]: {
      listStyleType: "none",
      paddingLeft: "0",
    },
  },
  wrapper: {
    position: "absolute",
    right: "12px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  button: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    backgroundColor: "transparent",
  },
});

export default Notifications;
