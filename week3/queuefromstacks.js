class queueFromStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(val) {
    this.stack1.push(val);
    this.stack2 = [...this.stack1].reverse();
  }

  pop() {
    this.stack1.splice(0, 1);
    return this.stack2.pop();
  }

  peek() {
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack2.length === 0;
  }
}

const queue1 = new queueFromStacks();
queue1.push(1);
console.log(queue1);
queue1.push(2);
console.log(queue1);
queue1.push(3);
console.log(queue1);
queue1.push(4);
console.log(queue1);
