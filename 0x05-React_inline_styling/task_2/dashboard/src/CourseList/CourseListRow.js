import React from "react";
import propTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    if (textSecondCell) {
      return (
        <tr className={css(styles.default)}>
          <th className={css(styles.header)}>{textFirstCell}</th>
          <th className={css(styles.header)}>{textSecondCell}</th>
        </tr>
      )
    } else return (
      <tr className={css(styles.default)}>
        <th colSpan={2} className={css(styles.header)}>{textFirstCell}</th>
      </tr>
    )
  } else return (
    <tr className={css(styles.default)}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  )
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string,
  textSecondCell: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ])
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#deb5b545',
    borderBottom: '2px solid lightgray',
    padding: '0.2vh',
  },

  default: {
    backgroundColor: '#f5f5f5ab',
  },
});

export default CourseListRow;
