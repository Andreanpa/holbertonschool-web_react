import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("<BodySectionWithMarginBottom />", () => {
  it("component and props", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const div = wrapper.find(".bodySectionWithMargin").first();
    const internalBody = BodySection.dive();
    expect(div.exists()).toEqual(true);

    const BodySection = wrapper.find("BodySection");
    expect(BodySection).toHaveLength(1);
    expect(BodySection.props().title).toEqual("test title");

    const h2 = internalBody.find("h2");
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual("test title");

    const p = internalBody.find("p");
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("test children node");
  });
});
