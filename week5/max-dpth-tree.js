let maximumDepth = 0;
var maxDepth = function (root) {
  function readAllNodes(t, level) {
    if (!t) return;

    maximumDepth = Math.max(maximumDepth, level);

    readAllNodes(t.left, level + 1);
    readAllNodes(t.right, level + 1);
  }

  readAllNodes(root, 1);

  return maximumDepth;
};

console.log(maxDepth([1, null, 2]));
