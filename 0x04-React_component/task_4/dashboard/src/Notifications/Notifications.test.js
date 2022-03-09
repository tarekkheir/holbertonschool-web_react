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

    it("empty listNotifications property", () => {
        shallow(<Notifications listNotifications={[]} />);
    });

    it("listNotifications is no empty", () => {
        const listNotifications = [
            { id: 1, value: 'New course available', type: 'default' },
            { id: 2, value: 'New resume available', type: 'urgent' },
            {
                id: 3,
                html: {
                    __html: '<strong>Urgent requirement</strong> - complete by EOD',
                },
                type: 'urgent',
            },
        ];
        const wrapper = shallow(
            <Notifications displayDrawer listNotifications={listNotifications} />,
        );
        expect(wrapper.find('div.Notifications')).toHaveLength(1);
        expect(wrapper.find('div.Notifications').children()).toHaveLength(3);
    });

});
