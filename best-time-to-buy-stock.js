const bestTimeToBuyStock = (arr) => {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < arr.length) {
    if (arr[left] > arr[right]) left = right;
    if (arr[left] < arr[right])
      maxProfit = Math.max(arr[right] - arr[left], maxProfit);
    right++;
  }

  return maxProfit;
};
console.log(bestTimeToBuyStock([2, 4, 1]));
