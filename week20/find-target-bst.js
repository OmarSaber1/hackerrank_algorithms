var findTarget = function (root, k) {
  const set = new Set();

  function dfs(t) {
    if (!t) return false;

    if (set.has(t.val)) return true;

    set.add(k - t.val, t.val);

    return dfs(t.left) || dfs(t.right);
  }

  return dfs(root);
};
