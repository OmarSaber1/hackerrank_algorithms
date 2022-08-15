const find_duplicate = function (nums) {
  let left = 0;

  while (left < nums.length) {
    if (nums[left] !== left + 1) {
      const right = nums[left] - 1;

      if (nums[right] !== nums[left]) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      } else {
        return nums[right];
      }
    } else {
      left++;
    }
  }

  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) return nums[i];
  }
};

console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
