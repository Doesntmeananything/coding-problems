/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Not viable due to closure
var merge = function(nums1, m, nums2, n) {
  nums1 = [...nums1, ...nums2].sort((a, b) => a - b);
};

// Solving iteratively
var merge = function(nums1, m, nums2, n) {
  while (n > 0 && m > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }

  while (n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n--;
  }
};

console.log(merge([1, 2, 3], 3, [2, 5, 6], 3));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([0], 3, [0], 3));

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]
