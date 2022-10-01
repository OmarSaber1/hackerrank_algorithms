var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const lefthash = {},
    righthash = {};

  for (var i = 0; i < s.length; i++) {
    const leftChar = s[i],
      rightChar = t[i];

    if (!lefthash[leftChar] && !righthash[rightChar]) {
      lefthash[leftChar] = rightChar;
      righthash[rightChar] = leftChar;
    } else {
      if (lefthash[leftChar] !== rightChar || righthash[rightChar] !== leftChar)
        return false;
    }
  }

  return true;
};
