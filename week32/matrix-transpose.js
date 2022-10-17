/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const res = Array(matrix[0].length)
    .fill(0)
    .map((el) => []);

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      res[j].push(matrix[i][j]);
    }
  }

  return res;
};
