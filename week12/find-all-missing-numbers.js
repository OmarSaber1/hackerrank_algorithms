function find_missing_numbers(nums) {
  let left = 0,
    missingNumbers = [];

  while (left < nums.length) {
    const rightIdx = nums[left] - 1;

    if (nums[left] !== nums[rightIdx]) {
      [nums[left], nums[rightIdx]] = [nums[rightIdx], nums[left]];
    } else {
      left++;
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i + 1) missingNumbers.push(i + 1);
  }
  return missingNumbers;
}

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
