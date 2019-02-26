/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // Creates a dummy node to use as a runner
    let mergedLinkedListHead = { val : -1, next : null };
    let runner = mergedLinkedListHead;

    // While both lists do not point at null
    while(l1 && l2) {
        // If first value is bigger
        if(l1.val > l2.val) {
            // Assign runner pointer to second list node
            runner.next = l2;
            // Assign second list node to next node
            l2 = l2.next;
        } else {
            // Otherwise assign runner pointer to first list node
            runner.next = l1;
            // Assign first list node to next node
            l1 = l1.next;
        }
        // Move runner to next node
        runner = runner.next;
    }

    // Check if one list is longer than the other
    runner.next = l1 || l2;
    return mergedLinkedListHead.next;
};

