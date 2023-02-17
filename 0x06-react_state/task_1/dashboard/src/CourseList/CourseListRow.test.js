import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists());
  });

  it("renders one cell", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    wrapper.update();
    const element = wrapper.find("th");
    expect(element).to.heve.length(1);
    expect(element.prop("colSpan")).to.equal("2");
  });

  it("renders two cells", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    wrapper.update();
    const element = wrapper.find("th");
    expect(element).to.heve.length(2);
    expect(element.first().text()).to.equal("test");
    expect(element.at(1).text()).to.equal("second");
  });

  it("renders two td", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    wrapper.update();
    const element = wrapper.find("tr");
    expect(element).to.heve.length(1);
    expect(element.children("td")).to.heve.length(2);
  });
});
