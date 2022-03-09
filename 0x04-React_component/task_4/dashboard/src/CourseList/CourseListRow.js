import React from "react";
import propTypes from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if (isHeader) {
        if (textSecondCell) {
            return (
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        } else return (
            <tr>
                <th colSpan={2}>{textFirstCell}</th>
            </tr>
        )
    } else return (
        <tr>
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

export default CourseListRow;
