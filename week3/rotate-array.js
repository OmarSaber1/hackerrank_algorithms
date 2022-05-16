const rotateArray = (nums, k) => {
  const splicedArray = nums.splice(-k, k);

  return [...splicedArray, ...nums];
};
