function schedule_tasks(str, k) {
  let totalIntervals = 0;
  const charFrequencyMap = {};

  for (let i = 0; i < str.length; i++) {
    charFrequencyMap[str[i]] = charFrequencyMap[str[i]] + 1 || 1;
  }

  let sortedHeap = Object.entries(charFrequencyMap).sort(
    ([key1, value1], [key2, value2]) => value1 - value2
  );

  while (sortedHeap.length > 0) {
    let waitList = [];
    let n = k + 1;

    while (n > 0 && sortedHeap.length > 0) {
      totalIntervals++;
      const [char, frequency] = sortedHeap.pop();

      if (frequency > 1) {
        waitList.push([char, frequency - 1]);
      }
      n--;
    }
    console.log(waitList, n, sortedHeap, { totalIntervals });
    sortedHeap.push(...waitList);
    sortedHeap.sort(([key1, value1], [key2, value2]) => value1 - value2);

    if (sortedHeap.length > 0) {
      totalIntervals += n;
    }
  }
  return totalIntervals;
}

console.log(
  `Minimum intervals needed to execute all tasks: ${schedule_tasks(
    ["a", "a", "a", "b", "c", "c"],
    2
  )}`
);
