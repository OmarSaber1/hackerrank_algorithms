var findKthLargest = function (nums, k) {
  heap = nums.slice(0, k);

  for (var i = k; i < nums.length; i++) {
    if (nums[i] > Math.min(...heap)) {
      heap[heap.indexOf(Math.min(...heap))] = nums[i];
    }
  }

  console.log(heap);

  return heap.sort((a, b) => b - a)[k - 1];
};
