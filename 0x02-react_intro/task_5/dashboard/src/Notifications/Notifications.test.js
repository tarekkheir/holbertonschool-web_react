import React from 'react';
import Notifications from './Notifications';
import  {shallow} from 'enzyme';

describe("Notifications tests", () => {
    it("render without fail", () => {
        const wrapper = shallow(<Notifications/>);
    })

    it("check if it render three list items", () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it("check text render", () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    });
});
