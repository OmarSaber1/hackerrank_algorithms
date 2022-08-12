var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  mergedIntervals = [];

  intervals.sort((a, b) => a[0] - b[0]);

  let start = intervals[0][0],
    end = intervals[0][1];

  for (var i = 1; i < intervals.length; i++) {
    const rightStart = intervals[i][0],
      rightEnd = intervals[i][1];

    if (rightStart <= end) {
      end = Math.max(end, rightEnd);
    } else {
      mergedIntervals.push([start, end]);
      start = rightStart;
      end = rightEnd;
    }
  }
  mergedIntervals.push([start, end]);

  return mergedIntervals;
};
