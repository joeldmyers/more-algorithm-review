const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = { isAnagram };
