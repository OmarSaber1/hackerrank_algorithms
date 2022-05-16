function removeRepeated(nums, val) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === val) {
      console.log(nums[3], i, val);
      nums.splice(i, 1);
      i--;
    }
  }

  console.log(nums);
}

removeRepeated([0, 1, 2, 2, 3, 0, 4, 2], 2);
