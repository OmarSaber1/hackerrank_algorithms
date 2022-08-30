var rotateRight = function (head, k) {
  if (!head || !k) return head;
  let last_node = head;
  let length = 1;

  while (last_node.next) {
    last_node = last_node.next;
    length++;
  }

  last_node.next = head;

  k %= length;

  const skipped = length - k;

  let last_skipped = head;

  for (var i = 0; i < skipped - 1; i++) {
    last_skipped = last_skipped.next;
  }

  head = last_skipped.next;
  last_skipped.next = null;

  return head;
};
