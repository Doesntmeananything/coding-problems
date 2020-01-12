/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = root => {
  if (!root) return 0;

  const findMinDepth = node => {
    if (!node) return Number.POSITIVE_INFINITY;
    if (!node.left && !node.right) return 1;

    return Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1;
  };

  return findMinDepth(root);
};
