var minDiffInBST = function (root) {
  let min = Infinity;
  let prev = -Infinity;

  function dfs(t) {
    if (!t) return;

    dfs(t.left);

    min = Math.min(min, t.val - prev);

    prev = t.val;

    dfs(t.right);
  }

  dfs(root);

  return min;
};
