function sumDigits(n) {
  var sum = 0;
  let count = 0;
  while (n >= 1) {
    sum += n % 10;
    n /= 10;
    count++;
  }
  return sum;
}

sumDigits(10);
