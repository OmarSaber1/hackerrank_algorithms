/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let rows = grid.length,
    cols = grid[0].length;

  let count = 0;

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      if (grid[row][col] == 1) {
        count += 4;
        if (row > 0 && grid[row - 1][col] == 1) count--;
        if (row < rows - 1 && grid[row + 1][col] == 1) count--;
        if (grid[row][col - 1] == 1) count--;
        if (grid[row][col + 1] == 1) count--;
      }
    }
  }

  return count;
};
