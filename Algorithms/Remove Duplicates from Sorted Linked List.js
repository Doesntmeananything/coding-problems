/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  currentNode = head;
  if (!currentNode || !currentNode.next) return currentNode;
  while (currentNode && currentNode.next) {
    currentNode.val === currentNode.next.val
      ? (currentNode.next = currentNode.next.next)
      : (currentNode = currentNode.next);
  }
  return head;
};
