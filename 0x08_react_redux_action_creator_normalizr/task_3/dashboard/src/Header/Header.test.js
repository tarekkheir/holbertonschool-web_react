import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from "../App/AppContext";


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it("Header renders without crashing", () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <Header />
    </AppContext.Provider>
  );
  expect(wrapper.exists()).toEqual(true);
});

it("check if the components render img h1 and logOutSection", () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <Header />
    </AppContext.Provider>
  );
  wrapper.update();
  expect(wrapper.find("div img")).toHaveLength(1);
  expect(wrapper.find("div h1")).toHaveLength(1);
  expect(wrapper.find("#logoutSection")).toHaveLength(0);
});

it("mounts the Header component with a user defined (isLoggedIn is true and an email is set). The logoutSection is created", () => {
  const wrapper = mount(
    <AppContext.Provider
      value={{ user: { ...user, isLoggedIn: true }, logOut }}
    >
      <Header />
    </AppContext.Provider>
  );

  expect(wrapper.find("#logoutSection")).toHaveLength(1);
});

it("mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy", () => {
  const logOutSpy = jest.fn();

  const wrapper = mount(
    <AppContext.Provider
      value={{
        user: {
          email: "hello@world.com",
          password: "123456789",
          isLoggedIn: true,
        },
        logOut: logOutSpy,
      }}
    >
      <Header />
    </AppContext.Provider>
  );

  expect(wrapper.find("#logoutSection")).toHaveLength(1);
  wrapper.find("#logoutSection span").simulate("click");

  expect(logOutSpy).toHaveBeenCalled();

  jest.restoreAllMocks();
});
