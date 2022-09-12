var intersect = function (nums1, nums2) {
  let arr1 = nums1.sort((a, b) => a - b);
  let arr2 = nums2.sort((a, b) => a - b);
  const results = [];

  while (arr1.length && arr2.length) {
    console.log(arr1, arr2);
    if (arr1[0] === arr2[0]) {
      results.push(arr1.shift());
      arr2.shift();
    } else if (arr1[0] > arr2[0]) {
      arr2.shift();
    } else {
      arr1.shift();
    }
  }

  return results;
};

intersect([4, 9, 5], [9, 4, 9, 8, 4]);
