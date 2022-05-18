const linkedListIntersection = (headA, headB) => {
  let head1 = headA;
  let head2 = headB;

  while (head1) {
    head1.visited = true;
    head1 = head1.next;
  }

  while (head2) {
    if (head2.visited) return head2;
    head2 = head2.next;
  }

  return null;
};
