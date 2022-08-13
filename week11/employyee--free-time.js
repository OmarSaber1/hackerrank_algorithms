class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const find_employee_free_time = function (schedule) {
  const intervals = schedule.reduce((a, b) => [...a, ...b], []);

  intervals.sort((a, b) => a.start - b.start);

  result = [];
  lastEnd = intervals[0].end;

  // [[1,2], [[1,3], [4,10] [6,8]]
  for (var i = 1; i < intervals.length; i++) {
    currentStart = intervals[i].start;
    currentEnd = intervals[i].end;

    if (currentStart > lastEnd) {
      result.push(new Interval(lastEnd, currentStart));
    }

    lastEnd = Math.max(lastEnd, currentEnd);
  }

  return result;
};

input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);
