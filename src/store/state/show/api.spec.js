import * as api from "./api";

describe("Show api", () => {
  it("should initialise the store", async () => {
    const results = await api.searchApi("doctor who");
    expect(results[0].show.name).toMatch(/doctor.*who/i);
  });
});
