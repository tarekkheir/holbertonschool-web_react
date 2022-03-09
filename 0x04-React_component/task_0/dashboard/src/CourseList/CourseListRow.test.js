import CourseListRow from "./CourseListRow";
import { shallow } from 'enzyme';
import React from 'react';

describe("CourseListRow tests", () => {
    it("test Component", () => {
        shallow(<CourseListRow />)
    })

    it("isHeader is True with no second text", () => {
        const wrapper = shallow(<CourseListRow
            isHeader={true}
            textFirstCell="Hello"
            textSecondCell={null} />)
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').prop('colSpan')).toBe(2);
        expect(wrapper.find('th').text()).toEqual('Hello');
    });

    it("isHeader is True with two cells", () => {
        const wrapper = shallow(<CourseListRow
            isHeader={true}
            textFirstCell="Hello"
            textSecondCell="World" />)
        expect(wrapper.find('th')).toHaveLength(2);
        expect(wrapper.find('th').at(0).text()).toEqual('Hello');
        expect(wrapper.find('th').at(1).text()).toEqual('World');
    })

    it("isHeader is False", () => {
        const wrapper = shallow(<CourseListRow
            isHeader={false}
            textFirstCell="Hello"
            textSecondCell="World" />)
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('td').at(0).text()).toEqual('Hello');
        expect(wrapper.find('td').at(1).text()).toEqual('World');
    });
});
