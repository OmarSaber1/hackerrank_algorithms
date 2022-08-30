class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse_alternate_k_elements = function (head, k) {
  // TODO: Write your code here

  if (!head) return;

  let current = head,
    previous = null;

  while (current) {
    let last_node_prev_cycle = previous;

    let last_node_current_cycle = current;

    let i = 0,
      next = null;

    while (current && i < k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i++;
    }

    if (last_node_prev_cycle) {
      last_node_prev_cycle.next = previous;
    } else {
      head = previous;
    }

    last_node_current_cycle.next = current;

    i = 0;
    while (current && i < k) {
      previous = current;
      current = current.next;
      i++;
    }
  }
  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(
    head,
    2
  ).get_list()}`
);
