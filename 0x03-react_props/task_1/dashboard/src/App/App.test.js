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
});
