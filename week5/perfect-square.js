var isPerfectSquare = function (num) {
  for (var i = 1; i * i <= num; i++) {
    if (i * i === num) return true;
  }

  return false;
};
