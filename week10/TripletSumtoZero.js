/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (arr) {
  triplets = [];
  arr.sort((a, b) => a - b);
  for (var i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    if (arr[i] > 0) break;

    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
};

function search_pair(arr, target, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum == target) {
      triplets.push([arr[left], arr[right], -target]);
      right--;
      left++;
      while (arr[left] === arr[left - 1] && left < right) {
        left++;
      }
      while (arr[right] === arr[right + 1] && left < right) {
        right--;
      }
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
