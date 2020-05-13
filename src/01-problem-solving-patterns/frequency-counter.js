const same = (arr1, arr2) => {
  // INPUT: Two arrays of numbers. One is first one, second is squares.

  let frequencyCounter = {};
  arr1.forEach((num) => {
    const square = num * num;
    frequencyCounter[square] = frequencyCounter[square]
      ? frequencyCounter[square] + 1
      : 1;
  });

  arr2.forEach((num) => {
    if (!frequencyCounter[num] || frequencyCounter[num] === 0) {
      return false;
    }
    frequencyCounter[num] = frequencyCounter[num] - 1;
  });

  const leftoverValues = Object.values(frequencyCounter).reduce(
    (sum, frequency) => frequency + sum,
    0
  );
  if (leftoverValues > 0) return false;

  // OUTPUT: should check if each value in arr1 has a square in arr2, with the same frequency.
  return true;
};

module.exports = { same };
