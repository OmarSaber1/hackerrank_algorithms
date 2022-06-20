var checkRecord = function (s) {
  let A = 0;
  let LCount = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      A++;
      LCount = 0;
    } else if (s[i] === "L") {
      LCount++;
      if (LCount >= 3 || A >= 2) return false;
    } else {
      LCount = 0;
    }
  }

  if (A >= 2) return false;

  return true;
};
