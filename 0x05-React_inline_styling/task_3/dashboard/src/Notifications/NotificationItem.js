import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let li_Item;
    const color = css(type === "urgent" ? styles.urgent : styles.default);

    value
      ? (li_Item = (
          <li
            className={color}
            data-notification-type={type}
            onClick={() => markAsRead(id)}
          >
            {value}
          </li>
        ))
      : (li_Item = (
          <li
            className={color}
            data-notification-type={type}
            dangerouslySetInnerHTML={html}
            onClick={() => markAsRead(id)}
          ></li>
        ));

    return li_Item;
  }
}

NotificationItem.defaultProps = {
  type: "default",
  html: {},
  value: "",
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

const screenSize = {
  small: "@media (max-width: 900px)",
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
    [screenSize.small]: {
      fontSize: "20px",
      padding: "10px 8px",
      borderBottom: "1px solid black",
      listStyle: "none",
    },
  },
  urgent: {
    color: "red",
    [screenSize.small]: {
      fontSize: "20px",
      padding: "10px 8px",
      borderBottom: "1px solid black",
      listStyle: "none",
    },
  },
});

export default NotificationItem;
