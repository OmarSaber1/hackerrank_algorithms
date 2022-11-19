var isCousins = function (root, x, y) {
  let xLevel = 0,
    yLevel = 0,
    xParent = null,
    yParent = null;

  (function dfs(t, currentLevel, parent) {
    if (!t) return;

    if (t.val == x) {
      xLevel = currentLevel;
      xParent = parent;
    }

    if (t.val == y) {
      yLevel = currentLevel;
      yParent = parent;
    }

    dfs(t.left, currentLevel + 1, t);
    dfs(t.right, currentLevel + 1, t);
  })(root, 0);

  return xLevel == yLevel && xParent !== yParent;
};
