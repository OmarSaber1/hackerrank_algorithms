class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top == null;
  }

  top() {
    if (!this.top) return "The Stack Is Empty!!!!";
    return this.top;
  }

  push(node) {
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (!this.top) return "The Stack Is Empty!!!!";
    const popedNode = this.top;
    this.top = this.top.next;
    return popedNode;
  }
}

class Node {
  constructor(val) {
    this.next = null;
    this.data = val;
  }
}

const Stack1 = new Stack();
const Node1 = new Node(1);
Stack1.push(Node1);
Stack1.push(new Node(2));
Stack1.push(new Node(3));
console.log(Stack1, "stackk1");
console.log(Stack1.pop());
console.log(Stack1, "stackk1");
console.log(Stack1.pop());
console.log(Stack1, "stackk1");
console.log(Stack1.pop());
console.log(Stack1, "stackk1");
console.log(Stack1.isEmpty());
