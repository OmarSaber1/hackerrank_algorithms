/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i <= sortedArray.length; i++) {
    if (sortedArray[i] !== i) return i;
  }
};
