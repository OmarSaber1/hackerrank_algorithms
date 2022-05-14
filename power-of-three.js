const isPowerOfThree = (n) => {
  if (n < 3 || n % 3 !== 0) return false;

  while (n >= 3) {
    n = n / 3;
    if (n === 1) return true;
    if (n % 3 !== 0) return false;
  }
  return false;
};

console.log(isPowerOfThree(9));
