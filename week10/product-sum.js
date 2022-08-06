const find_subarrays = function (arr, target) {
  result = 0;

  let left = 0,
    right = 0,
    sum = 1;

  while (right < arr.length) {
    const rightNum = arr[right];
    sum *= rightNum;
    while (sum >= target && left <= right) {
      const leftNum = arr[left];
      sum /= leftNum;
      left++;
    }
    result += right - left + 1;
    right++;
  }
  return result;
};

find_subarrays([10, 5, 2, 6], 100);
