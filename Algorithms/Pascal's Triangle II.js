/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  let result = Array(rowIndex + 1).fill(1);

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) {
      result[j] = result[j] + result[j - 1];
    }
  }
  return result;
};

console.log(getRow(4));
