/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (arr, target) {
  quadruplets = [];
  // TODO: Write your code here
  arr.sort((a, b) => a - b);
  for (var i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    for (var j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) continue;

      search_pair(arr, i, j, target, quadruplets);
    }
  }
  return quadruplets;
};

function search_pair(arr, first, second, target, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;

  while (left < right) {
    const sum = arr[first] + arr[second] + arr[left] + arr[right];

    if (sum == target) {
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] == arr[left - 1]) {
        left++;
      }
      while (left < right && arr[right] == arr[right + 1]) {
        right--;
      }
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
