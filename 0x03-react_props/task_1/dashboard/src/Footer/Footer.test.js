import React from "react";
import { shallow } from "enzyme";
import "./Footer";
import Footer from "./Footer";
import { expect } from "chai";
// import Adapter from "enzyme-adapter-react-16";

describe("Footer", () => {
  test("Footer render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("footer.App-footer").exists()).to.equal(true);
  });

  test('render de text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("footer.App-footer p").exists()).to.equal(true);
    expect(wrapper.find("Copyright")).to.equal(true);
  });
});
