import { shallow } from "enzyme";
import Footer from "./Footer";
import React from 'react';

describe("Footer test", () => {
    it("render without crashing", () => {
        shallow(<Footer />);
    });

    it("should contain at least Copyright", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toContain('Copyright');
    });
});
