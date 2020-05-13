const { same } = require("./frequency-counter");

describe("Checks Whether the same function returns true if each value in the first array has the same value in the second array", () => {
  test("it should correctly compare the first array's numbers squared to the second array", () => {
    // actual test
    expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
    expect(same([1, 2, 3], [1, 9])).toBe(false);
    expect(same([1, 2, 1], [4, 4, 1])).toBe(false); // must be same frequency
  });
});
