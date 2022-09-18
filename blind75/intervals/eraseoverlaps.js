var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0,
    left = 0,
    right = 1;

  //[1, 2],[1, 3], [2, 3],[3, 4],
  while (right < intervals.length) {
    if (intervals[right][0] <= intervals[left][1]) {
      count++;
    } else {
      left = right;
    }
    right++;
  }

  return count;
};

eraseOverlapIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
]);
