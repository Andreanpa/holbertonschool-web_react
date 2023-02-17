import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon1.png";
import { getLatestNotification } from "../utils/utils";

export function Notification() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
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
        aria-label="close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon" className="closeIcon" />
      </button>
    </div>
  );
}

export default Notification;
