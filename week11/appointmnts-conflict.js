const can_attend_all_appointments = function (intervals) {
  // TODO: Write your code here
  // [[1,4], [5,6], [7,9]]
  intervals.sort((a, b) => a.start - b.start);

  let start = intervals[0].start,
    end = intervals[0].end;

  for (var i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];

    if (currentInterval.start <= end) return false;

    end = currentInterval.end;
  }
  return true;
};
