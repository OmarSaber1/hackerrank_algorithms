var kthSmallest = function (matrix, k) {
  return matrix.reduce((a, b) => [...a, ...b], []).sort((a, b) => a - b)[k - 1];
};
