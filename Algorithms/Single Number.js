/**
 * https://leetcode.com/problems/single-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  let a = 0;
  for (const i of nums) {
    a ^= i;
  }
  return a;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
