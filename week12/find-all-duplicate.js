const find_all_duplicate = function (nums) {
  let left = 0,
    duplicates = [];

  while (left < nums.length) {
    console.log(nums);
    const right = nums[left] - 1;

    if (nums[right] !== nums[left]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    } else {
      left++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) duplicates.push(nums[i]);
  }

  return duplicates;
};

console.log(find_all_duplicate([4, 3, 2, 7, 8, 2, 3, 1]));
