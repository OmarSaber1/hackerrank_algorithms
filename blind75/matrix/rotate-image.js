/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (var i = 0; i < matrix[0].length; i++) {
    for (var j = matrix.length - 1; j >= 0; j--) {
      matrix[i].push(matrix[j].shift());
    }
  }
};
