/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const hash = {};
  const res = [];

  for (var key of nums) {
    if (key in hash) {
      res.push(key);
    } else {
      hash[key] = 1;
    }
  }

  for (var i = 1; i <= nums.length; i++) {
    if (!(i in hash)) {
      res.push(i);
      break;
    }
  }

  return res;
};
