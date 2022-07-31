const cache = {};

function fibonacci(n) {
  if (n in cache) return cache[n];

  if (n == 1 || n == 2) return 1;
  const value = fibonacci(n - 1) + fibonacci(n - 2);
  console.log(n, value);
  cache[n] = value;
  return value;
}

console.log(fibonacci(300));
