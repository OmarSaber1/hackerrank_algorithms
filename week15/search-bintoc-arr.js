const search_bitonic_array = function (arr, key) {
  // TODO: Write your code here
  const maxValueIdx = findMax(arr, key);

  if (arr[maxValueIdx] === key) return maxValueIdx;

  const leftSearchBinary = binarySearch(arr, key, 0, maxValueIdx);

  if (leftSearchBinary !== -1) {
    return leftSearchBinary;
  }

  return binarySearch(arr, key, maxValueIdx, arr.length - 1);
};

function findMax(arr, key) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) return mid;

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (arr[start] < arr[end]) {
      if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
}

console.log(search_bitonic_array([1, 3, 8, 4, 3], 4));
console.log(search_bitonic_array([3, 8, 3, 1], 8));
console.log(search_bitonic_array([1, 3, 8, 12], 12));
console.log(search_bitonic_array([10, 9, 8], 10));
