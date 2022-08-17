const find_Kth_smallest_number = function (nums, k) {
  heap = nums.slice(0, k);

  for (var i = k; i < nums.length; i++) {
    if (nums[i] < Math.max(...heap)) {
      heap[heap.indexOf(Math.max(...heap))] = nums[i];
    }
  }

  console.log(heap);

  return heap.sort((a, b) => a - b)[k - 1];
};
