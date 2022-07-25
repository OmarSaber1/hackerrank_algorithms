var sumZero = function (n) {
  const results = [];

  if (n % 2) {
    for (var i = -Math.floor(n / 2); i < n / 2; i++) {
      results.push(i);
    }
  } else {
    for (var i = -(n / 2); i < n / 2; i++) {
      if (i !== 0) {
        results.push(i);
      }
    }
  }

  return results;
};
