var merge = function (intervals) {
  let i = 1;

  let start = intervals[0][0],
    end = intervals[0][1];

  const merged = [];

  for (let i = 1; i < intervals.length; i++) {
    const startRight = intervals[i][0],
      endRight = intervals[i][1];

    if (startRight <= end) {
      end = Math.max(end, startRight);
    } else {
      merged.push([start, end]);
      start = startRight;
      end = endRight;
    }
  }
  merged.push([start, end]);
  return merged;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
//[[1,6],[8,10],[15,18]]
