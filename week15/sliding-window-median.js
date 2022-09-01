class SlidingWindowMedian {
  find_sliding_window_median(nums, k) {
    result = []; //[ 1.5 , .5 , 2
    total = 0;

    let windowStart = 0,
      windowEnd = 0;

    while (windowEnd < nums.length) {
      const rightNum = nums[windowEnd]; // 3
      total += rightNum; // 4

      //[1, 2, -1, 3, 5], 2
      if (windowEnd - windowStart + 1 === k) {
        result.push(total / 2);
      } else if (windowEnd - windowStart + 1 > k) {
        const startNum = nums[windowStart];
        total -= startNum;
        windowStart++;
        result.push(total / 2);
      }

      windowEnd++;
    }
    // TODO: Write your code here
    return result;
  }
}

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
