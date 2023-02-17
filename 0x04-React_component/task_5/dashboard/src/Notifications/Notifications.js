import React, { Fragment } from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon1.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <Fragment>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 && (
              <NotificationItem value="No new notification for now" />
            )}
            {listNotifications.map((notification) => {
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />;
            })}
          </ul>
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: "1rem",
              top: "0.5rem",
              width: "0rem",
            }}
          >
            <img src={closeIcon} alt="closeIcon" className="closeIcon" />
          </button>
        </div>
      )}
    </Fragment>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notification;
