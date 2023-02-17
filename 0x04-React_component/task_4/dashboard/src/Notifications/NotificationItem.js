import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
  let li_Item;

  if (value) {
    li_Item = <li data-notification-type={type}>{value}</li>;
  } else {
    li_Item = (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }
  return li_Item;
}

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
