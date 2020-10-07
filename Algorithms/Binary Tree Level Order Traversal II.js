/**
 * Given a binary tree, return the bottom-up level order traversal of
 * its nodes' values
 * (ie, from left to right, level by level from leaf to root).
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = root => {
  const result = [];

  const search = (node, level) => {
    if (!node) return;

    if (!result[level]) {
      result[level] = [node.val];
    } else {
      result[level].push(node.val);
    }

    search(node.left, level + 1);
    search(node.right, level + 1);
  };

  search(root, 0);

  return result.reverse();
};
