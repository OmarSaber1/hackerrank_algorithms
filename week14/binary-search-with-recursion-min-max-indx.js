/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function binarySearch(arr, target, findMax) {
  let start = 0,
    end = arr.length - 1;

  let returnedIndex = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      returnedIndex = mid;

      if (findMax) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return returnedIndex;
}

var searchRange = function (nums, target) {
  const results = [-1, -1];

  results[0] = binarySearch(nums, target, false);

  if (results[0] !== -1) {
    results[1] = binarySearch(nums, target, true);
  }

  return results;
};
