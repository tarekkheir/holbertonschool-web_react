import {shallow} from 'enzyme';
import App from "./App";
import React from 'react';

describe("App tests", () => {
    it("render without crash", () => {
        shallow(<App/>);
    })

    it("check if App-header exist", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App-header')).toHaveLength(1);
    });

    it("check if App-body", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App-body')).toHaveLength(1);
    });

    it("check if App-footer", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App-footer')).toHaveLength(1);
    });
});
