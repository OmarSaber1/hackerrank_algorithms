const pair_with_targetsum = function (arr, target_sum) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const sumNums = arr[left] + arr[right];
    if (sumNums == target_sum) return [left, right];

    if (sumNums > target_sum) right--;
    if (sumNums <= target_sum) left++;
  }

  return -1;
};
