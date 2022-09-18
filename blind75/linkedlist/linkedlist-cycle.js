var hasCycle = function (head) {
  if (!head) return head;

  let slow = head,
    fast = head.next;

  while (slow.next && fast.next.next) {
    if (slow.val == fast.val) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
