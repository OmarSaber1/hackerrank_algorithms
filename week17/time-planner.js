function timePlanner(a, b, dur) {
  let left = 0,
    right = 0;

  while (left < a.length) {
    max = Math.max(a[left][0], b[right][0]);
    min = Math.min(a[left][1], b[right][1]);

    if (min + dur <= max) return min + dur;

    if (a[left][1] < b[right][1]) {
      left++;
    } else {
      right++;
    }
  }
}

//slotsA = [[10, 50], [60, 120], [140, 210]]
//slotsB = [[0, 15], [60, 70]]
//dur = 8
//output: [60, 68]

//0 -------------15

//        10 --------------------50
