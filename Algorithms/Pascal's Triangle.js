/**
 * https://leetcode.com/problems/pascals-triangle/
 *
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  let result = [];
  for (let k = 1; k <= numRows; k++) {
    result.push([...Array(k)].fill(1));
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result;
};

console.log(generate(5));
