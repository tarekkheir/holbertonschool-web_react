import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';


beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('renders without crashing', () => {
    shallow(<Login />);
});

it('should render 3 input and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('label')).toHaveLength(2);
});

it("the components should render 2 label", () => {
    const wrapper = shallow(<Login />);
    const submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput).toHaveLength(1);
    expect(submitInput.prop("disabled")).toEqual(true);
});


it("the components should render 2 label", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    emailInput.simulate("change", {
        target: { name: "email", value: "hello@email.com" },
    });

    let submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput.prop("disabled")).toEqual(true);

    passwordInput.simulate("change", {
        target: { name: "password", value: "world" },
    });

    submitInput = wrapper.find("form input[type='submit']");
    expect(submitInput.prop("disabled")).toEqual(false);
});
