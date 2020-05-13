const { same } = require("./frequency-counter");

describe("Checks Whether the same function returns true if each value in the first array has the same value in the second array", () => {
  test("it should filter by a search term (link)", () => {
    // actual test
    expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
  });
});
