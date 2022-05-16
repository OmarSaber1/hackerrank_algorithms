const containDuplicates = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
