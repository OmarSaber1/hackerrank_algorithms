const mergeArray = (arr1, m, arr2, n) => {
  arr1.splice(m);
  for (let i = 0; i < n; i++) {
    arr1.push(arr2[i]);
  }
  arr1.sort((a, b) => a - b);

  console.log(arr1);
};

console.log(mergeArray([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
