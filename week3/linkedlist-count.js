const linkedListCount = (head) => {
  let current = head;
  let listCount = 1;
  let middleNodeCount = 1;

  while (current.next) {
    current = current.next;
    listCount++;
  }

  if (listCount % 2) {
    middleNodeCount = Math.ceil(counter / 2);
  } else {
    middleNodeCount = counter / 2 + 1;
  }

  let count = 1;
  while (middleNodeCount !== count) {
    head = head.next;
    count++;
  }

  return head;
};
