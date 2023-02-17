import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type, html, value }) => {
  if (html === undefined) {
    return <li data-notification-type={type}>{value}</li>;
  } else {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default NotificationItem;
