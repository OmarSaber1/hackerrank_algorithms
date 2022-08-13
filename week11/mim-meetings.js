const min_meeting_rooms = function (meetings) {
  // TODO: Write your code here
  let res = 0,
    count = 0;

  const start = meetings.map((meet) => meet.start).sort((a, b) => a - b);
  const end = meetings.map((meet) => meet.end).sort((a, b) => a - b);

  let e = 0,
    s = 0;

  while (s < meetings.length) {
    if (start[s] < end[e]) {
      count++;
      s++;
    } else {
      count--;
      e++;
    }
    res = Math.max(count, res);
  }

  return res;
};
