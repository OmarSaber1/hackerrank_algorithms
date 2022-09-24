var pacificAtlantic = function (heights) {
  const r = heights.length,
    c = heights[0].length;

  const dp = Array(r * c).fill(0);
  const answer = [];

  function dfs(i, j, w, h) {
    let ij = i * c + j;

    if (dp[ij] & w || heights[i][j] < h) return;

    (dp[ij] += w), (h = heights[i][j]);
    if (dp[ij] === 3) answer.push([i, j]);

    if (i + 1 < r) dfs(i + 1, j, w, h);
    if (i > 0) dfs(i - 1, j, w, h);
    if (j + 1 < c) dfs(i, j + 1, w, h);
    if (j > 0) dfs(i, j - 1, w, h);
  }

  for (var i = 0; i < r; i++) {
    dfs(i, 0, 1, heights[i][0]);
    dfs(i, c - 1, 2, heights[i][c - 1]);
  }

  for (var j = 0; j < c; j++) {
    dfs(0, j, 1, heights[0][j]);
    dfs(r - 1, j, 2, heights[r - 1][j]);
  }

  return answer;
};
