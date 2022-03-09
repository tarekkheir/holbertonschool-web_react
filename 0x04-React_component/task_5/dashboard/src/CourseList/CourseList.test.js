import CourseList from './CourseList';
import { shallow } from 'enzyme';
import React from 'react';

describe("CourseList tests", () => {
    it("test Component", () => {
        shallow(<CourseList />)
    });

    it("renders without crashing", () => {
        shallow(<CourseList listCourses={[]} />);
    });
});
