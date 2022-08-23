const search_ceiling_of_a_number = function (arr, key) {
  // TODO: Write your code here

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) return mid;

    if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(left, right);
  if (left > right) {
    return left;
  } else if (left > right) return left + 1;

  return -1;
};

console.log(search_ceiling_of_a_number([4, 6, 10], 6));
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12)); //left = 4 , right = 3
console.log(search_ceiling_of_a_number([4, 6, 10], 17)); //l = 3 , r = 2
console.log(search_ceiling_of_a_number([4, 6, 10], -1)); //l = 0
