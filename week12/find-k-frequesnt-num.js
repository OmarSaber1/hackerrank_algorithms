const find_k_frequent_numbers = function (nums, k) {
  topNumbers = [];
  // TODO: Write your code here

  let hash = {};

  for (var i = 0; i < nums.length; i++) {
    hash[nums[i]] ? hash[nums[i]]++ : (hash[nums[i]] = 1);
  }

  console.log(hash);
  const sorted = Object.entries(hash).sort(
    ([key1, value1], [key2, value2]) => value2 - value1
  );

  return sorted.slice(0, k).map(([a, b]) => a);
};

console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers(
    [5, 12, 11, 3, 11],
    2
  )}`
);
