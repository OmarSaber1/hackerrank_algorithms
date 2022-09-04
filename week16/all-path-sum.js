var pathSum = function (root, sum) {
  allPaths = [];

  recusrionPaths(root, sum, [], allPaths);
  return allPaths;
};

function recusrionPaths(root, sum, paths, allPaths) {
  if (!root) return;
  paths.push(root.val);
  if (root.val === sum && root.left == null && root.right == null) {
    allPaths.push([...paths]);
  }
  recusrionPaths(root.left, sum - root.val, paths, allPaths);
  recusrionPaths(root.right, sum - root.val, paths, allPaths);
  console.log(paths, root);
  paths.pop();
}
