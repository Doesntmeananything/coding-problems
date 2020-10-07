/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = nums => {
  if (nums.length == 1) return new TreeNode(nums[0]);
  if (nums.length == 0) return null;

  const center = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[Math.floor(nums.length / 2)]);

  root.left = sortedArrayToBST(nums.slice(0, center));
  root.right = sortedArrayToBST(nums.slice(center + 1));

  return root;
};
