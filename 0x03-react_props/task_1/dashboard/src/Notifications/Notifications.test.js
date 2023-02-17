import Notifications from "./Notifications.js";
import { React } from "react";
import { shallow } from "enzyme";

describe("Notifications", () => {
  const wrapper = shallow(<Notifications />);

  test("Notifications renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test("Notifications renders three list items", () => {
    const list_item = wrapper.find("li");
    expect(list_item.length).toEqual(3);
  });

  test("Notifications renders the correct text", () => {
    const text = wrapper.find("p");
    expect(text.text()).toBe("Here is the list of notifications");
  });
});
