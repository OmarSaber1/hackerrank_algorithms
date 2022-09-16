/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (arr) {
  const res = Array(arr.length + 1).fill(-1);

  for (var key of arr) {
    res[key] = 0;
  }

  return res.indexOf(-1);

  //      const sortedArray = arr.sort((a, b) => a - b);

  //   for (let i = 0; i <= sortedArray.length; i++) {
  //     if (sortedArray[i] !== i) return i;
  //   }
};
