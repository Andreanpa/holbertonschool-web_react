import React, { Fragment } from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon1.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

export function Notifications(displayDrawer) {
  return (
    <Fragment>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
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
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notification;
