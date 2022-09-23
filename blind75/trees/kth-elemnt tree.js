var kthSmallest = function (root, k) {
  const res = [];

  (function dfs(head) {
    if (res.length !== k) {
      if (head.left) dfs(head.left);
      res.push(head.val);
      if (head.right) dfs(head.right);
    }
    return;
  })(root);

  return res[k - 1];
};
