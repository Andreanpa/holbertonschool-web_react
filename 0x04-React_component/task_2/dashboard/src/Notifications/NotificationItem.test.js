import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  test("NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });

  test("passing dummy type and value renders the correct html ", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    const li = wrapper.find("li");

    expect(li.props()).to.have.property("data-notification-type", "default");
    expect(li.text()).to.equal("test");
  });
  test("renders the correct html", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    const li = wrapper.find("li");
    expect(li.html()).to.equal("<li><u>test</u></li>");
  });
});
