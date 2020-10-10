function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  let runnerA = headA;
  let runnerB = headB;

  let lastA;
  let lastB;

  let traversedA = false;
  let traversedB = false;

  while (runnerA !== runnerB) {
    if (runnerA.next) {
      runnerA = runnerA.next;
    } else if (traversedA && !runnerA.next) {
      return null;
    } else {
      lastA = runnerA;
      runnerA = headB;
    }

    if (runnerB.next) {
      runnerB = runnerB.next;
    } else if (traversedB && !runnerB.next) {
      return null;
    } else {
      lastB = runnerB;
      runnerB = headA;
    }

    if (lastA && lastB && lastA !== lastB) {
      return null;
    }
  }

  return runnerA;
};
