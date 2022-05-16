const isPowerOfThree = (n) => {
  const a = Math.log(n) / Math.log(3);
  return Math.abs(a - Math.round(a)) < 1e-14;
};

console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(1));
