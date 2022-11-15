var rangeSumBST = function (root, L, R) {
  var sum = 0;

  (function dfs(t, min, max) {
    if (!t) return;

    if (t.val <= max && t.val >= min) sum += t.val;

    dfs(t.left, min, max);
    dfs(t.right, min, max);
  })(root, L, R);

  return sum;
};
