import React from "react";
import toJSON from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { SearchForm } from "./index";

describe("SearchForm", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it("should ... ", () => {
    expect(toJSON(<SearchForm />)).toEqual("Not implemented");
  });
});
