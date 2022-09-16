/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    if (height[right] > height[left]) {
      max = Math.max(max, height[left] * (right - left));
      left++;
    } else {
      max = Math.max(max, height[right] * (right - left));
      right--;
    }
  }
  return max;
};
