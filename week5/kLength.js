/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let left = 0;
  let right = 0;

  while (right < nums.length && left < nums.length) {
    if (nums[left] == 1) {
      right = left + 1;
      while (right < nums.length) {
        if (nums[right] == 1) {
          if (right - left - 1 < k) {
            return false;
          } else {
            left = right;
            break;
          }
        }
        right++;
      }
    } else {
      left++;
    }
  }

  return true;
};

console.log(kLengthApart([0, 1, 0, 1], 1));
