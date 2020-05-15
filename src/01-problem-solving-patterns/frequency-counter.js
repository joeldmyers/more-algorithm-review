const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  // Counter Approach

  // Linear time complexity.
  // let frequencyCounter = {};
  // arr1.forEach((num) => {
  //   const square = num * num;
  //   frequencyCounter[square] = frequencyCounter[square]
  //     ? frequencyCounter[square] + 1
  //     : 1;
  // });

  // arr2.forEach((num) => {
  //   if (!frequencyCounter[num] || frequencyCounter[num] === 0) {
  //     return false;
  //   }
  //   frequencyCounter[num] = frequencyCounter[num] - 1;
  // });

  // const leftoverValues = Object.values(frequencyCounter).reduce(
  //   (sum, frequency) => frequency + sum,
  //   0
  // );
  // if (leftoverValues > 0) return false;

  // return true;

  // this is more terse, but it's approx 2 * n log n + n because of the sorting.
  // let sortedArr1 = arr1.sort((a, b) => a - b);
  // let sortedArr2 = arr2.sort((a, b) => a - b);

  // for (var i = 0; i < sortedArr1.length; i++) {
  //   if (Math.pow(sortedArr1[i], 2) !== sortedArr2[i]) {
  //     return false;
  //   }
  // }
  // return true;

  // one more approach, two counters

  let counter1 = {};
  let counter2 = {};

  for (let num of arr1) {
    const squared = Math.pow(num, 2);
    counter1[squared] = (counter1[squared] || 0) + 1;
  }

  for (let num of arr2) {
    counter2[num] = (counter2[num] || 0) + 1;
  }

  for (let key in counter1) {
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
};

module.exports = { same };
