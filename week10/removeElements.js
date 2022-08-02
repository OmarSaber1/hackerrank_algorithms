var removeElement = function (nums, val) {
  let nextRemove = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[nextRemove] = nums[i];
      nextRemove++;
    }
  }

  return nextRemove;
};
