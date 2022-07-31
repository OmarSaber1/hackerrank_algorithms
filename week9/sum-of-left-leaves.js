var sumOfLeftLeaves = function (root) {
  let sum = 0;
  let parent = root;

  function readAllNodes(t, nodeType) {
    if (!t) {
      return;
    }

    if (!t?.left && !t.right && nodeType == "left") sum += t.val;
    readAllNodes(t.left, "left");
    readAllNodes(t.right, "right");
  }

  readAllNodes(root);

  return sum;
};
