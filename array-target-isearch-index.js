const searchIndex = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;
  let mid = 0;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] === target) return mid;
    if (target > arr[mid]) {
      min = mid + 1;
    }
    if (target < arr[mid]) {
      max = mid - 1;
    }
  }
  return min;
};

console.log(searchIndex([1, 2, 4, 5, 6, 7, 8], 7));
