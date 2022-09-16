var search = function (arr, key) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) return mid;

    // left side sorted
    if (arr[mid] >= arr[left]) {
      if (arr[left] <= key && arr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } //right side sorted
    else {
      if (key > arr[mid] && key <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
