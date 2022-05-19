const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  let next = current.next;

  while (current) {
    current.next = prev;
    prev = current;
    current = next;
    next = current?.next;
  }

  return head;
};
