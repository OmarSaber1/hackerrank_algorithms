const triplet_with_smaller_sum = function (arr, target) {
  let count = 0;

  arr.sort((a, b) => a - b);
  // TODO: Write your code here

  for (var i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  console.log(count);
  return count;
};

triplet_with_smaller_sum([-1, 0, 2, 3], 3);
