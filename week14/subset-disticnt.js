/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  subsets = [[]];

  let start = 0,
    end = 0;

  for (var i = 0; i < nums.length; i++) {
    start = 0;
    const currentNum = nums[i];
    console.log(start, end, subsets);
    if (i > 0 && nums[i] === nums[i - 1]) {
      start = end;
    }
    end = subsets.length;
    for (var j = start; j < end; j++) {
      const cloned = subsets[j].slice(0);
      cloned.push(currentNum);
      subsets.push(cloned);
    }
  }

  return subsets;
};

subsetsWithDup([1, 1, 2, 2]);
