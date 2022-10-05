/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = [];

  nums1.map((num) => {
    let idx = nums2.indexOf(num);

    if (idx !== -1) {
      while (nums2[++idx] < num);

      if (nums2[idx]) {
        res.push(nums2[idx]);
      } else {
        res.push(-1);
      }
    }
  });

  return res;
};
