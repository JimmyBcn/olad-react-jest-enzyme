import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Farm, { IFarmProps } from "../../src/Farm"

configure({ adapter: new Adapter() });

describe("Farm", () => {
  it("should have a location", () => {
    const wrapper = shallow(
      <Farm location="Barcelona" />
    )
  
    expect((wrapper.instance().props as IFarmProps).location).toEqual("Barcelona");
  })
})