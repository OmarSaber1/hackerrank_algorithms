var insert = function (intervals, new_interval) {
  let merged = [];
  let i = 0;

  while (i < intervals.length && new_interval[0] > intervals[i][1]) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= new_interval[1]) {
    new_interval[0] = Math.min(intervals[i][0], new_interval[0]);
    new_interval[1] = Math.max(intervals[i][1], new_interval[1]);
    i++;
  }
  merged.push(new_interval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }
  return merged;
};
