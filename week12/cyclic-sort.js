const cyclic_sort = function (nums) {
  // TODO: Write your code here

  let left = 0;

  while (left < nums.length) {
    let right = nums[left] - 1;
    console.log(nums);
    if (nums[left] !== left + 1) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    } else {
      left++;
    }
  }

  return nums;
};

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);
