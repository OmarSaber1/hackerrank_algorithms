var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (sameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function sameTree(t, s) {
  if (!t && !s) return true;
  if (t && s && t.val !== s.val) return false;

  if (t?.val == s?.val) {
    return sameTree(t.left, s.left) && sameTree(t.right, s.right);
  }
  return false;
}

// return JSON.stringify(root).indexOf(JSON.stringify(subRoot)) !== -1
