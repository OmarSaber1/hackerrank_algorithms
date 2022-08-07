var detectCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
};
