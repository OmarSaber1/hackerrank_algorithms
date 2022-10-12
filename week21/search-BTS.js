var searchBST = function (root, val) {
  let node = null;

  function dfs(t) {
    if (!t) return;

    if (t.val === val) node = t;

    if (t.val > val) {
      dfs(t.left);
    } else {
      dfs(t.right);
    }
  }

  dfs(root);

  return node;
};
