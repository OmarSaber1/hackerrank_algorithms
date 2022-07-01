class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(node) {
    if (!this.head) {
      this.head = this.tail = node;
      return this.head;
    }
    this.tail.next = node;
    this.tail = node;
  }
}

const sortedList = [];

function mergeSortLinkedLists(arrayList) {
  const mergedLists = arrayList[0].head;

  for (var i = 0; i < arrayList.length - 1; i++) {
    arrayList[i].tail.next = arrayList[i + 1].head;
  }

  let current = mergedLists;

  while (current) {
    sortedList.push(current);
    let temp = current;
    current = current.next;
    temp.next = null;
  }

  const sortedMergedList = sortedList.sort((a, b) => a.value - b.value);

  const head = sortedMergedList[0];
  let currentHead = head;

  for (var i = 1; i < sortedMergedList.length; i++) {
    currentHead.next = sortedMergedList[i];
    currentHead = currentHead.next;
  }

  return head;
}

function print(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

const linkedList1 = new LinkedList();
linkedList1.push(new Node(1));
linkedList1.push(new Node(3));
linkedList1.push(new Node(5));

const linkedList2 = new LinkedList();
linkedList2.push(new Node(2));
linkedList2.push(new Node(6));
linkedList2.push(new Node(11));

const linkedList3 = new LinkedList();
linkedList3.push(new Node(7));
linkedList3.push(new Node(9));
linkedList3.push(new Node(10));
const mergedAllLists = mergeSortLinkedLists([
  linkedList1,
  linkedList2,
  linkedList3,
]);
print(mergedAllLists);
console.log(sortedList);
