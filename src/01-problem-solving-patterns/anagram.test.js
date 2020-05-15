const { isAnagram } = require("./anagram");

describe("test description", () => {
  test("describe individual test", () => {
    expect(isAnagram("", "")).toBe(true);
    expect(isAnagram("aaz", "zza")).toBe(false);
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("rat", "car")).toBe(false);
    expect(isAnagram("awesome", "awesom")).toBe(false);
    expect(isAnagram("texttwisttime", "timetwisttext")).toBe(true);
  });
});
