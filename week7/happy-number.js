var isHappy = function (n) {
  const squares = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,
    5: 25,
    6: 36,
    7: 49,
    8: 64,
    9: 81,
  };

  if (n < 1) return false;

  const set = new Set();

  while (!set.has(n)) {
    set.add(n);

    var str = n.toString();
    n = 0;

    for (var i = 0; i < str.length; i++) {
      n += squares[str[i]];
    }

    if (n === 1) return true;
  }

  return false;
};
