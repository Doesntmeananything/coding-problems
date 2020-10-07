/**
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Approach 1: Hash Table
// Time complexity: O(n)
// Space complexity: O(n)
const hasCycle = head => {
  if (!head || !head.next) return false;

  const occurences = new Map();

  while (head) {
    if (!occurences.has(head)) {
      occurences.set(head, head.val);
      head = head.next;
    } else {
      return true;
    }
  }

  return false;
};

// Approach 2: Fast and Slow runners
// Time complexity: O(n)
// Space complexity: O(1)
const hasCycle2P = head => {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
