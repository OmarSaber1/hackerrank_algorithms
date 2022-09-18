const reverseList = (head) => {
  if (!head) return head;

  //null < = 1 => 2 => 3

  let prev = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};

reverseList();
