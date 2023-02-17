import React from "react";
import { shallow } from "enzyme";
import "./Login";
import Login from "./Login";
import { expect } from "chai";

describe("Login", () => {
  const wrapper = shallow(<Login />);

  test("Login render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("render <input>", () => {
    expect(wrapper.find("body.App-login input")).to.have.lentghOf(2);
  });

  test("render <label>", () => {
    expect(wrapper.find("body.App-login label")).to.have.lentghOf(2);
  });
});
