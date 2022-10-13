var largeGroupPositions = function (s) {
  let res = [];

  let left = 0,
    right = 0;

  while (right < s.length) {
    if (s[right] == s[left]) {
      if (right - left + 1 >= 3 && s[right] !== s[right + 1]) {
        res.push([left, right]);
      }
    } else {
      left = right;
    }
    right++;
  }

  return res;
};
