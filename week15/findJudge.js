var findJudge = function (n, trust) {
  const count = Array(n + 1).fill(0);

  for (var [i, j] of trust) {
    count[i]--;

    count[j]++;
  }

  // [0 , -1 , -1, 2]
  for (var i = 1; i < count.length; i++) {
    if (count[i] === n - 1) return i;
  }

  return -1;
};
