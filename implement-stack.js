class MyStack {
  stack = [];

  push(x) {
    this.stack[this.stack.length] = x;
    return x;
  }
  pop() {
    const poped = this.stack[this.stack.length - 1];
    this.stack.length = this.stack.length - 1;
    return poped;
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  empty() {
    if (this.stack.length === 0) return true;
    return false;
  }
}
