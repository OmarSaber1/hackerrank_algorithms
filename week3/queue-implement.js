class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null;
  }

  peek() {
    if (!this.head) return "The Queue Is Empty!!!!";
    return this.head;
  }

  push(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  pop() {
    if (!this.head) return "The Stack Is Empty!!!!";
    const popedNode = this.head;
    this.head = this.head.next;
    return popedNode;
  }
}

class Node {
  constructor(val) {
    this.next = null;
    this.data = val;
  }
}

const Queue1 = new Queue();
const Node1 = new Node(1);
Queue1.push(Node1);
Queue1.push(new Node(2));
Queue1.push(new Node(3));
console.log(Queue1, "queue");
console.log(Queue1.pop());
console.log(Queue1, "queue");
console.log(Queue1.pop());
console.log(Queue1, "queue");
console.log(Queue1.pop());
console.log(Queue1, "queue");
console.log(Queue1.isEmpty());
