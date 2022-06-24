var intersection = function (arr1, arr2) {
  const newSet = new Set(arr1);

  return [...new Set(arr2.filter((el) => newSet.has(el)))];
};
