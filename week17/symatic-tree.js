var isSymmetric = function (root) {
  if (!root) return true;

  return symaticTree(root.left, root.right);
};

function symaticTree(left, right) {
  if (!left && !right) return true;
  if ((!left && right) || (!right && left)) return false;
  if (left.val !== right.val) return false;

  return (
    symaticTree(left.left, right.right) && symaticTree(left.right, right.left)
  );
}
