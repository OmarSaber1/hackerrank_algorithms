/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];

  while (matrix.length) {
    const row = matrix.shift();
    res.push(...row);

    for (var m of matrix) {
      const val = m.pop();
      if (val) {
        res.push(val);
        m.reverse();
      }
    }

    matrix.reverse();
  }

  return res;
};
