const binary_search = function (arr, target) {
  // TODO: Write your code here

  let left = 0,
    right = arr.length - 1;

  let isReversed = false;

  if (arr[left] > arr[right]) {
    isReversed = true;
    arr.reverse();
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return isReversed ? arr.length - 1 - mid : mid;

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

console.log(binary_search([4, 6, 10], 10));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binary_search([10, 6, 4], 10));
console.log(binary_search([10, 6, 4], 4));
