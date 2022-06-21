var hasAlternatingBits = function (n) {
  const binary = n.toString(2).split("");

  for (var i = 0; i < binary.length - 1; i++) {
    if (binary[i] == 1 && binary[i + 1] != 0) return false;
    if (binary[i] == 0 && binary[i + 1] != 1) return false;
  }
  return true;
};
