/*
 * Complete the 'formingMagicSquare 3 X 3' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function isMagic(m) {
  const totalSumRequired = 15;

  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (var i = 0, j = m.length - 1; i < m.length; j--, i++) {
    leftDiagonalSum += m[i][i];
    rightDiagonalSum += m[i][j];
  }

  if (
    leftDiagonalSum !== totalSumRequired ||
    rightDiagonalSum !== totalSumRequired
  )
    return false;

  for (var i = 0; i < m.length; i++) {
    let rowSum = 0;
    let columnSum = 0;

    for (var j = 0; j < m.length; j++) {
      rowSum += m[i][j];
      columnSum += m[j][i];
    }
    if (rowSum !== totalSumRequired || columnSum !== totalSumRequired) {
      return false;
    }
  }

  return true;
}

function getTransformMinCost(m, n) {
  let totalCost = 0;

  for (var i = 0; i < m.length; i++) {
    totalCost += Math.abs(m[i] - n[i]);
  }

  return totalCost;
}

function formingMagicSquare(s) {
  // static 8 arrays that match magic box of 3 * 3
  const p = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = 10000;

  for (let i = 0; i < p.length; i++) {
    let prevCost = getTransformMinCost(s.flat(), p[i].flat());
    minCost = Math.min(minCost, prevCost);
  }

  return minCost;
}

const minCost = formingMagicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
]);

console.log(minCost);
