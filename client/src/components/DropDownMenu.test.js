import * as React from "react";
import renderer from "react-test-renderer";
import DropDownMenu from "./DropDownMenu";

describe("DropDownMenu component", () => {
  it("renders correctly for the dashboard nav location", () => {
    const tree = renderer
      .create(<DropDownMenu  dashLocation="dashboard" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly for the profile nav location", () => {
    const tree = renderer
      .create(<DropDownMenu profileLocation="profile" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly for the default nav location", () => {
    const tree = renderer.create(<DropDownMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
