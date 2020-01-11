// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = root => {
  const checkBalanced = tree => {
    if (!tree) return { balanced: true, height: -1 };

    let leftResult = checkBalanced(tree.left);
    if (!leftResult.balanced) return { balanced: false };

    let rightResult = checkBalanced(tree.right);
    if (!rightResult.balanced) return { balanced: false };

    isSubtreeBalanced = Math.abs(leftResult.height - rightResult.height) <= 1;
    subtreeHeight = Math.max(leftResult.height, rightResult.height) + 1;
    return { balanced: isSubtreeBalanced, height: subtreeHeight };
  };

  return checkBalanced(root).balanced;
};
