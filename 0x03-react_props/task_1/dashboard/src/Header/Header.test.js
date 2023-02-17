import React from "react";
import { shallow } from "enzyme";
import "./Header";
import { expect } from "chai";

describe("Header", () => {
  const wrapper = shallow(<Header />);

  test("Header renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test("render img", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header.App img").exists()).toEqual(true);
  });

  test("render hi", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header.App h1").exists()).toBe(true);
  });
});
