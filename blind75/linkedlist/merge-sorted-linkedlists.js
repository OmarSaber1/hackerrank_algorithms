var mergeTwoLists = function (list1, list2) {
  // 1 => 2 => 4
  // 1 => 3 => 4

  let head = new LinkedList[0](); //1 => 1 => 2 => 3 => 4 => 4
  let current = head;

  let l1 = list1,
    l2 = list2;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    }
    {
      head.next = l2;
      l2 = l2.next;
    }

    head = head.next;
  }

  if (!l1) {
    head.next = l2;
  }

  if (!l2) {
    head.next = l1;
  }

  return current.next;
};
