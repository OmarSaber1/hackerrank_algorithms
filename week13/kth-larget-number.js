class KthLargestNumberInStream {
  constructor(nums, k) {
    // TODO: Write your code here
    this.k = k;
    this.nums = nums;
  }

  add(num) {
    // TODO: Write your code here
    this.nums.push(num);
    this.nums.sort((a, b) => b - a);
    return this.nums[this.k - 1];
  }
}

kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);
