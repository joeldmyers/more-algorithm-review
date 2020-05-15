const { sumZero, sumZero2 } = require("./multiple-pointers");

describe("Describe test", () => {
  test("checks if function works", () => {
    expect(sumZero([-5, -3, -2, 0, 1, 2, 6])).toEqual([-2, 2]);
    expect(sumZero2([-5, -3, -2, 0, 1, 2, 6])).toEqual([-2, 2]);
  });
});
