var getMinimumDifference = function (root) {
  let min = Infinity;
  let prev = -Infinity;

  (function dfs(head) {
    if (!head) return;

    dfs(head.left);
    min = Math.min(min, Math.abs(head.val - prev));
    prev = head.val;
    dfs(head.right);
  })(root);

  return min;
};
