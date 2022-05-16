var findMedianSortedArrays = function (nums1, nums2) {
  const sum = [...nums1, ...nums2].sort((a, b) => a - b);

  const medianLength = sum.length / 2;

  if (medianLength % 2) return sum[Math.floor(medianLength)];

  return (sum[medianLength] + sum[medianLength - 1]) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]));
