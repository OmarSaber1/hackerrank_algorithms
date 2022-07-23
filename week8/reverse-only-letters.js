var reverseOnlyLetters = function (s) {
  let left = 0,
    right = s.length - 1;

  s = s.split("");
  while (left < right) {
    while (!/^[a-zA-Z]+$/.test(s[left])) {
      left++;
    }
    while (!/^[a-zA-Z]+$/.test(s[right])) {
      right--;
    }

    if (left >= right) break;
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return s.join("");
};
