var isPalindrome = function (x) {
  let maxLength = Math.floor(("" + x).length / 2);

  let xStr = ("" + x).split("");

  for (var i = 0; i < maxLength; i++) {
    console.log(xStr[i] + " " + xStr[xStr.length - 1 - i]);
    if (xStr[i] !== xStr[xStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(0));
