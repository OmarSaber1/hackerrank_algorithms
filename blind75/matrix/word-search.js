var exist = function (board, word) {
  if (!word.length) return false;
  function dfs(r, c, i) {
    if (
      r < 0 ||
      c < 0 ||
      r >= board.length ||
      c >= board[0].length ||
      board[r][c] !== word[i] ||
      !board[r][c]
    )
      return false;

    console.log(board);
    console.log(board[r][c], word[i]);
    if (i === word.length - 1) return true;

    board[r][c] = ".";

    res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    board[r][c] = word[i];
    return res;
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
