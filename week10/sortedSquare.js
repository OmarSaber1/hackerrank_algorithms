var sortedSquares = function (arr) {
  return arr.map((el) => el * el).sort((a, b) => a - b);
};
