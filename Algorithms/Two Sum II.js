/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  const results = {};

  for (let i = 1; i <= numbers.length; i++) {
    if (results[numbers[i - 1]]) {
      return [results[numbers[i - 1]], i];
    }

    results[target - numbers[i - 1]] = i;
  }
};
