var findLeastNumOfUniqueInts = function (arr, k) {
  const numsFrequencyMap = {};

  for (var i = 0; i < arr.length; i++) {
    numsFrequencyMap[arr[i]]
      ? numsFrequencyMap[arr[i]]++
      : (numsFrequencyMap[arr[i]] = 1);
  }

  const minHeap = Object.entries(numsFrequencyMap).sort((a, b) => b[1] - a[1]);

  while (minHeap.length > 0 && k > 0) {
    const [num, frequency] = minHeap.pop();

    k -= frequency;
  }

  return k < 0 ? minHeap.length + 1 : minHeap.length;
};
