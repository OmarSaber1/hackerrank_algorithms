var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;

  let fast = head,
    slow = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = reverseLinkedList(slow.next);
  slow = slow.next;

  while (slow) {
    if (slow.val !== head.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

function reverseLinkedList(head) {
  let prev = null,
    next = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
