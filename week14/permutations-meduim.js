/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  result = [];
  const numsLength = nums.length;
  const permuataions = [[]];

  for (var i = 0; i < numsLength; i++) {
    const currentNumber = nums[i];
    const n = permuataions.length;
    for (var j = 0; j < n; j++) {
      const oldPermutation = permuataions.shift();

      for (var k = 0; k < oldPermutation.length + 1; k++) {
        const newPermutation = oldPermutation.slice(0);
        newPermutation.splice(k, 0, currentNumber);

        if (newPermutation.length === numsLength) {
          result.push(newPermutation);
        } else {
          permuataions.push(newPermutation);
        }
      }
    }
  }
  return result;
};
