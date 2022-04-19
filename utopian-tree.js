function utopianTree(n) {
  let totalHeight = 1;

  if (n == 0) return 1;

  for (var i = 0; i < n; i++) {
    totalHeight = i % 2 == 0 ? totalHeight * 2 : totalHeight + 1;
  }

  return totalHeight;
}

console.log(utopianTree(0));
console.log(utopianTree(1));
console.log(utopianTree(4));
