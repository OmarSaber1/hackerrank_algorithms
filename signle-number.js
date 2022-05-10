const singleNumber = (numbers) => {
  const sortedArray = numbers.sort((a, b) => a - b);

  let current = 0;

  while (current < numbers.length) {
    if (sortedArray[current] !== sortedArray[current + 1])
      return sortedArray[current];
    current += 2;
  }
};
//  1 1 2 2 4
console.log(singleNumber([4, 1, 2, 1, 2]));
