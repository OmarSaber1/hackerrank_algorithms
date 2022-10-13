var search = function (nums, target) {
  // [4,5,6,7,1,2,3]
  // [4,5,1,2,3]
  // [4,5,1,1,1,2,3,4,4]

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] > nums[right]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      right--;
    }
  }

  return false;
};
