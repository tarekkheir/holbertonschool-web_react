import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import propTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.coursList)}>
      {listCourses.length > 0 ? (
        <>
          <thead>
            <CourseListRow
              isHeader={true}
              textFirstCell="Available Courses" />
            <CourseListRow
              isHeader={true}
              textFirstCell="Course name"
              textSecondCell="Credit" />
          </thead>
          <tbody>
            {listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))}
          </tbody>
        </>
      ) : (
        <tbody>
          <CourseListRow textFirstCell={'No course available yet'} />
        </tbody>
      )}
    </table>
  )
}


CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape)
}

const styles = StyleSheet.create({
  coursList: {
    border: '1px solid lightgray',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0.5vh',
    lineHeight: '1.2em',
  }
});

export default CourseList;
