/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (arr) {
  return [...new Set(arr)].length !== arr.length;
};
