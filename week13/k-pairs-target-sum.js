function find_k_largest_pairs(nums1, nums2, k) {
  const heap = [];

  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];

    for (let j = 0; j < nums2.length; j++) {
      const num2 = nums2[j];

      const sum = num1 + num2;
      const pairs = [num1, num2];

      if (heap.length < k) {
        heap.push([pairs, sum]);
      } else {
        if (sum > heap[heap.length - 1][1]) {
          heap.pop();
          heap.push([pairs, sum]);
        }
      }
      heap.sort((a, b) => b[1] - a[1]);
    }
  }

  return heap;
  console.log(heap);
}

console.log(find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3));
