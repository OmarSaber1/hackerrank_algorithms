const search_min_diff_element = function (arr, key) {
  // TODO: Write your code here
  if (key < arr[0]) return arr[0];

  let start = 0,
    end = arr.length - 1;

  if (key >= arr[end]) return arr[end];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) return key;

    if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (arr[start] - key < key - arr[end]) return arr[start];
  return arr[end];
};

console.log(search_min_diff_element([4, 6, 10], 7));
console.log(search_min_diff_element([4, 6, 10], 4));
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));
console.log(search_min_diff_element([4, 6, 10], 17));
