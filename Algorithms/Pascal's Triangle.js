/**
 * https://leetcode.com/problems/pascals-triangle/
 *
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    result.push(Array(i + 1).fill(1));
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result;
};

console.log(generate(5));
