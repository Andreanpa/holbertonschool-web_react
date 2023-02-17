import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let element;
  let bg_color;
  const bg_color_1 = { backgroundColor: "#f5f5f5ab" };
  const bg_color_2 = { backgroundColor: "#deb5b545" };

  if (isHeader === true) {
    bg_color = bg_color_2;
    if (textSecondCell === null) {
      element = <th colSpan="2">{textFirstCell}</th>;
    } else {
      element = (
        <Fragment>
          <th className={css(styles.cell, styles["align-left"])}>
            {textFirstCell}
          </th>
          <th className={css(styles.cell, styles["align-left"])}>
            {textSecondCell}
          </th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    bg_color = bg_color_1;
    element = (
      <Fragment>
        <td className={css(styles.cell)}>{textFirstCell}</td>
        <td className={css(styles.cell)}>{textSecondCell}</td>
      </Fragment>
    );
  }

  return <tr style={bg_color}>{element}</tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  cell: {
    padding: "0.25rem",
    border: "1px solid lightgray",
  },
  "align-left": {
    textAlign: "left",
  },
});

export default CourseListRow;
