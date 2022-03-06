import React from "react";

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

export default CourseListRow;
