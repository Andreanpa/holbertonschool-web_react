import App from "./App";
import { React } from "react";
import { shallow } from "enzyme";

describe("App", () => {
  const wrapper = shallow(<App />);

  test("App renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  test("App renders header", () => {
    const header = wrapper.find("header.App-header");

    expect(header.exists()).toBe(true);
  });
  test("App renders body", () => {
    const body = wrapper.find("body.App-body");

    expect(body.exists()).toBe(true);
  });
  test("App renders footer", () => {
    const footer = wrapper.find("footer.App-footer");

    expect(footer.exists()).toBe(true);
  });
});
