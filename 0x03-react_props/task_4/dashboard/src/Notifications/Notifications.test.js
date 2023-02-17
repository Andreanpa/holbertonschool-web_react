import Notifications from "./Notifications";
import { React } from "react";
import { shallow } from "enzyme";

describe("Notifications", () => {
  const wrapper = shallow(<Notifications />);

  test("Notifications renders without crashing", () => {
    expect(wrapper.exists()).to.equal(true);
  });

  test("renders NotificationItem elements", () => {
    const NtfItem = wrapper.find("NotificationItem");
    expect(NtfItem).toBeDefined();
    expect(NtfItem.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  test("Notifications renders the correct text", () => {
    const text = wrapper.find("p");
    expect(text.text()).to.equal("Here is the list of notifications");
  });
});
