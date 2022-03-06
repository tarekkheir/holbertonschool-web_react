import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe("Notifications tests", () => {
    it("render without fail", () => {
        const wrapper = shallow(<Notifications />);
    })

    it("Notifications not display", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it("Notifications display", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    });
});
