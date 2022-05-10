class MyStack {
  stack = [];

  push(n) {
    this.stack[this.stack.length] = n;
  }

  pop() {
    const lastIndex = this.stack.length - 1;
    const lastNumber = this.stack[lastIndex];
    this.stack.length = lastIndex;
    return lastNumber;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return Math.min(...this.stack);
  }
}
