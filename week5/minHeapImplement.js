class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(newValue) {
    this.heap.push(newValue);

    if (this.heap.length > 2) {
      let newValueIndex = this.heap.length - 1;
      let parentIndex = Math.floor(newValueIndex / 2);

      while (
        this.heap[newValueIndex] < this.heap[parentIndex] &&
        newValueIndex !== 1
      ) {
        [this.heap[newValueIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[newValueIndex],
        ];
        newValueIndex = parentIndex;
        parentIndex = Math.floor(newValueIndex / 2);
      }
    }
    return this.heap;
  }

  remove() {
    let smallest = this.heap[1];

    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.length--;

    let currentIndex = 1;
    let left = currentIndex * 2;
    let right = currentIndex * 2 + 1;

    while (
      this.heap[currentIndex] > this.heap[left] ||
      this.heap[currentIndex] > this.heap[right]
    ) {
      if (this.heap[left] < this.heap[right]) {
        [this.heap[currentIndex], this.heap[left]] = [
          this.heap[left],
          this.heap[currentIndex],
        ];
        currentIndex = left;
      } else {
        [this.heap[currentIndex], this.heap[right]] = [
          this.heap[right],
          this.heap[currentIndex],
        ];
        currentIndex = right;
      }

      left = currentIndex * 2;
      right = currentIndex * 2 + 1;

      if (!this.heap[left] || !this.heap[right]) return smallest;
    }
  }
}

const minHeap = new MinHeap();
console.log(minHeap.insert(2));
console.log(minHeap.insert(3));
console.log(minHeap.insert(4));
console.log(minHeap.insert(1));

console.log(minHeap.remove());
console.log(minHeap);
