function meetingPlanner(slotsA, slotsB, dur) {
  let left = 0,
    right = 0;

  while (left < slotsA.length && right < slotsB.length) {
    let start = Math.max(slotsA[left][0], slotsB[right][0]);
    let end = Math.min(slotsA[left][1], slotsB[right][1]);

    if (start + dur <= end) {
      return [start, start + dur];
    }

    if (slotsA[left][1] < slotsB[right][1]) {
      left++;
    } else {
      right++;
    }
  }

  return [];
}

console.log(
  meetingPlanner(
    [
      [10, 50],
      [60, 120],
      [140, 210],
    ],
    [
      [0, 15],
      [60, 70],
    ],
    8
  )
);
