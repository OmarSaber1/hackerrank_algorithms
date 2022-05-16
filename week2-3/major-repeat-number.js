const majorRepeatNumber = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);

  let majorNumber = sortedArray[0];
  let counter = 1;
  let maxCount = 1;

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      counter++;
    } else {
      if (counter > maxCount) {
        maxCount = counter;
        majorNumber = arr[i];
      }
      counter = 1;
    }
  }

  return majorNumber;
};

console.log(majorRepeatNumber([6, 6, 6, 7, 7]));
