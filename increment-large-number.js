const incrementLargeNumber = (digits = []) => {
  let lastIndex = digits.length - 1;

  if (digits[lastIndex] !== 9) {
    digits[lastIndex] = digits[lastIndex] + 1;
    return digits;
  }

  while (digits[lastIndex] === 9) {
    digits[lastIndex] = 0;
    lastIndex--;
  }

  if (digits[0] === 0) {
    digits.unshift(1);
    return digits;
  }
  digits[lastIndex] = digits[lastIndex] + 1;

  return digits;
};

console.log(incrementLargeNumber([1, 2, 3]));
