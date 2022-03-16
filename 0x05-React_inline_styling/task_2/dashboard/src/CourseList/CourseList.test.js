import CourseList from './CourseList';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';


beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("CourseList tests", () => {
    it("test Component", () => {
        shallow(<CourseList />)
    });

    it("renders without crashing", () => {
        shallow(<CourseList listCourses={[]} />);
    });
});
