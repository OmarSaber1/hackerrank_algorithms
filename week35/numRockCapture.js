/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let x = 0,
    y = 0,
    totalCaptures = 0;

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] == "R") {
        x = i;
        y = j;
      }
    }
  }

  for (var right = y + 1; right < 8; right++) {
    if (board[x][right] == "B") break;
    if (board[x][right] == "p") {
      totalCaptures++;
      break;
    }
  }

  console.log(totalCaptures);
  for (var left = y - 1; left >= 0; left--) {
    if (board[x][left] == "B") break;
    if (board[x][left] == "p") {
      totalCaptures++;
      break;
    }
  }

  console.log(totalCaptures);

  for (var up = x - 1; up >= 0; up--) {
    if (board[up][y] == "B") break;
    if (board[up][y] == "p") {
      totalCaptures++;
      break;
    }
  }
  console.log(totalCaptures);

  for (var down = x + 1; down < 8; down++) {
    if (board[down][y] == "B") break;
    if (board[down][y] == "p") {
      totalCaptures++;
      break;
    }
  }
  return totalCaptures;
};
