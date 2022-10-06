/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const flattedArr = mat.flat();

  if (r * c !== flattedArr.length) return mat;
  let res = [];
  // 1 ,2 ,3 ,4

  while (flattedArr.length) res.push(flattedArr.splice(0, c));

  return res;
};
