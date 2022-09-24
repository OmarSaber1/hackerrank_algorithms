var numIslands = function (grid) {
  let count = 0;

  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == "1") {
        count++;
        explore(row, col, grid);
      }
    }
  }

  return count;
};

function explore(r, c, grid) {
  if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[r].length ||
    grid[r][c] == 0
  )
    return;

  grid[r][c] = "0";

  explore(r + 1, c, grid);
  explore(r - 1, c, grid);
  explore(r, c + 1, grid);
  explore(r, c - 1, grid);
}
