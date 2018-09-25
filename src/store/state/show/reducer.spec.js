import reducer, { initialValue } from "./reducer.js";

import * as actions from "./actions";

describe("Show reducer", () => {
  it("should initialise the store", () => {
    expect(reducer(undefined, { type: "SOME-TYPE" })).toEqual(initialValue);
  });

  it("should add the search results to the state", () => {
    expect(reducer(initialValue, actions.searchSuccess([]))).toEqual({
      results: []
    });
  });

  it("should handle error states", () => {
    expect(reducer(initialValue, actions.searchError("SOME ERROR"))).toEqual({
      results: null,
      error: "SOME ERROR"
    });
  });
});
