import { shallow, mount } from "enzyme";
import Footer from "./Footer";
import React from 'react';
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";

describe("Footer test", () => {
  it("render without crashing", () => {
    shallow(<Footer />);
  });

  // it("should contain at least Copyright", () => {
  //   const wrapper = shallow(<Footer />);
  //   expect(wrapper.find('p').text()).toContain('Copyright');
  // });

  it("check if it contain a link", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.App-footer a")).toHaveLength(0);
  });

  it("check if it contain a link with Contact Us as text", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.App-footer a")).toHaveLength(1);
    expect(wrapper.find("div.App-footer a").text()).toEqual("Contact us");
  });
});
