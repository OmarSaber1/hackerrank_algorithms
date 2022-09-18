var removeNthFromEnd = function (head, n) {
  if (!head) return head;

  let slow = head,
    fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
};

//[1,2,3,4,5], n = 2
//[1,2,3,5]
