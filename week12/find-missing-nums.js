const find_missing_number = function (nums) {
  // TODO: Write your code here
  const res = [];
  let left = 0;

  while (left < nums.length) {
    const right = nums[left];

    if (nums[left] < nums.length && nums[left] !== nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    } else {
      left++;
    }
  }
  console.log(nums);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i) res.push(i);
  }
  return res;
};

console.log(find_missing_number([4, 0, 3, 1]));
