var mergeTrees = function (root1, root2) {
  if (root1 && root2) {
    const node = new TreeNode(root1.val + root2.val);

    node.left = mergeTrees(root1.left, root2.left);
    node.right = mergeTrees(root1.right, root2.right);

    return node;
  }

  return root1 || root2;
};
