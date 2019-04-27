/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// BFS soluition
const isSameTree = function(p, q) {
  const treeNodes1 = [];
  const treeNodes2 = [];

  // Use queues for BFS
  treeNodes1.push(p);
  treeNodes2.push(q);

  while (treeNodes1.length && treeNodes2.length) {
    let node1 = treeNodes1.shift();
    let node2 = treeNodes2.shift();
    // Node values to compare
    let value1;
    let value2;

    if (node1 === null) {
      value1 = null;
    } else {
      value1 = node1.val;
      treeNodes1.push(node1.left, node1.right);
    }

    if (node2 === null) {
      value2 = null;
    } else {
      value2 = node2.val;
      treeNodes2.push(node2.left, node2.right);
    }

    if (value1 !== value2) return false;
  }

  return treeNodes1.length == treeNodes2.length;
};

// DFS solution
const isSameTreeRecursive = function(p, q) {
  if (p && q) {
    let leftResult = isSameTree(p.left, q.left);
    let rightResult = isSameTree(p.right, q.right);
    let same = p.val === q.val;
    return leftResult && rightResult && same;
  } else if (p && !q) {
    return false;
  } else if (!p && q) {
    return false;
  }
  return true;
};
