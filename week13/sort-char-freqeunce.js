const find_char_frequent = function (nums) {
  let charFrequencyMap = {};
  let str = "";

  for (var i = 0; i < nums.length; i++) {
    charFrequencyMap[nums[i]]
      ? charFrequencyMap[nums[i]]++
      : (charFrequencyMap[nums[i]] = 1);
  }

  const sorted = Object.entries(charFrequencyMap).sort(
    ([key1, value1], [key2, value2]) => value2 - value1
  );

  for (const [key, value] of sorted) {
    for (let i = 0; i < value; i++) {
      str += key;
    }
  }
  return str;
};

console.log(
  `Here are the K frequent numbers: ${find_char_frequent("Programming")}`
);
