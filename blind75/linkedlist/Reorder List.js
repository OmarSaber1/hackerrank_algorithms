const reorderList = (head) => {
  if (!head) return null;

  let fast = head,
    slow = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const rightSection = reverseList(fast);
  (slow = null), (leftSection = head);

  while (leftSection && rightSection) {
    const leftNext = leftSection.next;
    const rightNext = rightSection.next;

    leftSection.next = rightSection;
    rightSection.next = leftNext;

    leftSection = leftNext;
    rightNext = rightNext;
  }

  return head;
};

function reverseList(head) {
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

1, 2, 3;
1, 2, 3, 4;
