import { shallow } from 'enzyme';
import App from "./App";
import React from 'react';

describe("App tests", () => {
    it("render without crash", () => {
        shallow(<App />);
    })

    it("Notifications component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it("Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it("Login component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it("Footer component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it("CourseList not display", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it("App with isLoggedIn true", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('Login')).toHaveLength(0);
        expect(wrapper.find('CourseList')).toHaveLength(1);
    });

    it("press h and ctrl down", () => {
        const events = {};
        const logOut = jest.fn();

        window.alert = jest.fn();
        window.addEventListener = jest.fn((event, cb) => {
            events[event] = cb;
        });

        shallow(<App logOut={logOut} />);
        events.keydown({ key: 'h', ctrlkey: true });

        expect(logOut).toBeCalledTimes(1);
        expect(window.alert).toBeCalledWith('Logging you out');

        window.alert.mockRestore();
    });
});
