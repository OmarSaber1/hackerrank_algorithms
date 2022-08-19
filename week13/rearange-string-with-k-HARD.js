function reorganize_string(str, k) {
  const charFrequencyMap = {};

  for (let i = 0; i < str.length; i++) {
    charFrequencyMap[str[i]] = charFrequencyMap[str[i]] + 1 || 1;
  }

  let sortedHeap = Object.entries(charFrequencyMap).sort(
    ([key1, value1], [key2, value2]) => value1 - value2
  );

  let queue = [];
  const resultString = [];

  while (sortedHeap.length > 0) {
    console.log("heap", sortedHeap, "queue", queue, "String", resultString);
    const [char, frequency] = sortedHeap.pop();
    resultString.push(char);
    queue.push([char, frequency - 1]);

    if (queue.length === k) {
      const [char, frequency] = queue.shift();
      if (frequency > 0) {
        sortedHeap.push([char, frequency]);
        sortedHeap.sort(([key1, value1], [key2, value2]) => value1 - value2);
      }
    }
  }

  if (resultString.length === str.length) return resultString.join("");

  return "";
}

console.log(`Reorganized string: ${reorganize_string("Programming", 3)}`);
