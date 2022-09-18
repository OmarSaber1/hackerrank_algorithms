var insert = function (intervals, new_interval) {
  let i = 0;
  let merged = [];

  while (i < intervals.length && new_interval[0] > intervals[i][1]) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && new_interval[1] >= intervals[i][0]) {
    const min = Math.min(new_interval[0], intervals[i][0]);
    const max = Math.max(new_interval[1], intervals[i][1]);
    new_interval = [min, max]; //3,8
    i++;
  }

  merged.push(new_interval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }
  console.log(merged);
};

insert(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 8]
);
