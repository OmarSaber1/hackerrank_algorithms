var inorderTraversal = function (root) {
  const inOrderTraversalValues = [];

  function printAllNodes(t) {
    if (!t) return;

    printAllNodes(t.left);
    inOrderTraversalValues.push(t.val);

    printAllNodes(t.right);
  }
  printAllNodes(root);

  return inOrderTraversalValues;
};
