import React, { useState } from "react";
import propTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  const itemStyle = css(
    isChecked && (styles.rowChecked),
    isHeader ? styles.header : styles.default,
  )

  return (
    {
      ...isHeader ? (
        <tr className={css(styles.default)}>
          <th colSpan={(!textSecondCell ? 2 : null)} className={css(styles.header)}>{textFirstCell}</th>
          {textSecondCell && (<th className={itemStyle}>{textSecondCell}</th>)}
        </tr>
      ) : (
        <tr className={css(styles.default)}>
          <td className={itemStyle}>
            <input type="checkbox" onClick={handleCheck}></input>
            {textFirstCell}
          </td>
          <td className={itemStyle}>{textSecondCell}</td>
        </tr>
      )
    }
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

  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

export default CourseListRow;
