// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let prevVal = 0;
  let curVal = 0;
  for (let i = 0; i < nums.length; i++) {
    prevVal = nums[i];
    curVal = nums[i + 1];
    if (prevVal < target && curVal >= target) {
      return i + 1;
    } else if (prevVal > target) {
      return 0;
    } else if (prevVal === target) {
      return i;
    }
  }

  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 0));
