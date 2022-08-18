function find_closest_elements(arr, k, x) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (rightPointer - leftPointer + 1 > k) {
    // a-x <= b-x (Comparison Law at the Question)
    if (Math.abs(arr[leftPointer] - x) <= Math.abs(arr[rightPointer] - x))
      rightPointer--;
    else leftPointer++;
    console.log(arr.slice(leftPointer, rightPointer + 1));
  }

  return arr.slice(leftPointer, rightPointer + 1);
}

console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements(
    [2, 4, 5, 6, 9],
    3,
    6
  )}`
);
