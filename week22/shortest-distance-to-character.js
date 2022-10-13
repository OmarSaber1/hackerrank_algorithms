var shortestToChar = function (s, c) {
  let res = [];

  for (var i = 0; i < s.length; i++) {
    res[i] = s[i] == c ? 0 : findMin(s, c, i);
  }

  return res;
};

function findMin(str, ch, i) {
  let minLeft = i,
    minRight = i;

  while (minLeft >= 0) {
    if (str[minLeft] == ch) break;
    minLeft--;
  }

  while (minRight < str.length) {
    if (str[minRight] == ch) break;
    minRight++;
  }

  if (minLeft < 0) minLeft = -Infinity;
  if (minRight == str.length) minRight = Infinity;
  return Math.min(i - minLeft, minRight - i);
}
