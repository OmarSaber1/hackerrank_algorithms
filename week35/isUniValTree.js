var isUnivalTree = function (root) {
  if (!root) return true;
  let matchedValue = root.val;

  function dfs(t) {
    if (t == undefined || t == null) return true;

    if (t.val !== matchedValue) return false;
    return dfs(t.left) && dfs(t.right);
  }

  return dfs(root);
};
