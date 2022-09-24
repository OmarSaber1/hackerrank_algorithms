/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hash = {};

  for (var i = 0; i < nums.length; i++) {
    hash[nums[i]] ? hash[nums[i]]++ : (hash[nums[i]] = 1);
  }

  const sorted = Object.entries(hash).sort(
    ([key1, value1], [key2, value2]) => value2 - value1
  );

  return sorted.slice(0, k).map(([a, b]) => a);
};
