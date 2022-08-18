/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (str) {
  const charFrequencyMap = {};

  for (let i = 0; i < str.length; i++) {
    charFrequencyMap[str[i]] = charFrequencyMap[str[i]] + 1 || 1;
  }

  let sorted = Object.entries(charFrequencyMap).sort(
    ([key1, value1], [key2, value2]) => value1 - value2
  );

  let prevChar = null;
  let prevFreq = 0;
  const result = [];

  while (sorted.length > 0) {
    const [key, value] = sorted.pop();

    if (prevChar !== null && prevFreq > 0) {
      sorted.push([prevChar, prevFreq]);
      sorted = sorted.sort(([key1, value1], [key2, value2]) => value1 - value2);
    }

    result.push(key);
    prevFreq = value - 1;
    prevChar = key;
  }

  if (result.length === str.length) return result.join("");

  return "";
};
