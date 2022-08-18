const find_sum_of_elements = function (nums, k1, k2) {
  // TODO: Write your code here
  nums.sort((a, b) => a - b);

  return nums.slice(k1, k2 - 1).reduce((a, b) => a + b, 0);
};

console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [1, 3, 12, 5, 15, 11],
    3,
    6
  )}`
);
