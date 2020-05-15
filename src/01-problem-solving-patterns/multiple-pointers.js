const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === 0) {
      return [arr[left], arr[right]];
    } else if (currentSum > 0) {
      // go left
      right--;
    } else {
      // go right
      left++;
    }
  }
};

const sumZero2 = (arr) => {
  // use binary search.
  const binarySearch = (array, number) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      if (number === array[mid]) {
        return mid;
      } else if (number < array[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  };

  for (var i = 0; i < arr.length; i++) {
    const num = arr[i];
    const negNum = num * -1;
    const pairIndex = binarySearch(arr, negNum);
    if (pairIndex > -1) {
      return [arr[i], arr[pairIndex]];
    }
  }
};

module.exports = { sumZero, sumZero2 };
