var NumArray = function (nums) {
  this.size = nums.length;
  this.prefixSum = Array(nums.legnth).fill(0);

  this.prefixSum[0] = nums[0];

  for (let i = 1; i < this.size; i++) {
    this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // lookup table from prefixSum
  if (left == 0) {
    return this.prefixSum[right];
  } else {
    return this.prefixSum[right] - this.prefixSum[left - 1];
  }
};
