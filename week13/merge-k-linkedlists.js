var mergeKLists = function (lists) {
  const minHeap = [];

  lists.map((a) => a && minHeap.push(a));

  minHeap.sort((a, b) => b.val - a.val);

  let head = null,
    tail = null;

  while (minHeap.length > 0) {
    let node = minHeap.pop();

    if (!head) {
      head = tail = node;
    } else {
      tail.next = node;
      tail = node;
    }

    if (node.next) {
      minHeap.push(node.next);
    }
    minHeap.sort((a, b) => b.val - a.val);
  }

  return head;
};
