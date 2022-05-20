class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.tail.next = null;
    }
    this.length++;
    return this;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      temp.prev = node;
      node.prev = null;
      node.next = temp;
      this.head = node;
    }

    this.length++;
  }

  find(val) {
    if (!this.head) return "The list is empty!";

    let current = this.head;
    while (current) {
      if (current.value === val) return current;
      current = current.next;
    }

    return "There is no such node match in the list";
  }

  delete(val) {
    if (!this.head) return "This list is empty!";
    if (this.head.value === val && this.head.next == null) {
      this.head = null;
      this.tail = null;
    } else if (this.head.value === val && this.head.next) {
      let temp = this.head;
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    } else if (this.tail.value === val) {
      let temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
    } else {
      let current = this.head.next;
      while (current) {
        if (current.value === val) {
          let temp = current;
          temp.prev.next = temp.next;
          temp.next.prev = temp.prev;
          return this;
        }
        current = current.next;
      }
      return "No such Node Exists!!";
    }

    this.length--;
    return this;
  }
}

class Node {
  constructor(nodeValue) {
    this.next = null;
    this.prev = null;
    this.value = nodeValue;
  }
}

const LinkedList1 = new DoublyLinkedList();
LinkedList1.push(1);
LinkedList1.push(2);
LinkedList1.push(3);
LinkedList1.unshift(0);
LinkedList1.unshift(-1);
console.log(LinkedList1.delete(3));
