const find_corrupt_numbers = function (nums) {
  // TODO: Write your code here
  let left = 0;

  while (left < nums.length) {
    const right = nums[left] - 1;

    if (nums[left] !== nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    } else {
      left++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return [nums[i], i + 1];
  }
};

console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
