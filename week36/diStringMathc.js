var diStringMatch = function (s) {
  let max = s.length;
  let min = 0;

  const res = [];

  for (var num of s) {
    if (num == "D") {
      res.push(max);
      max--;
    }

    if (num == "I") {
      res.push(min);
      min++;
    }
  }

  res.push(max);

  return res;
};
