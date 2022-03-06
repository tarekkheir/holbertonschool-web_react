import CourseList from './CourseList';
import { shallow } from 'enzyme';
import React from 'react';

describe("CourseList tests", () => {
    it("test Component", () => {
        shallow(<CourseList />)
    });

    it("render 5 different rows", () => {
        const wrapper = shallow(<CourseList />)
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});
