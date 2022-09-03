class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree_right_view = function (root) {
  result = [];
  const queue = [root];

  while (queue.length > 0) {
    const queueLength = queue.length;

    for (var i = 0; i < queueLength; i++) {
      const current = queue.shift();

      if (i === queueLength - 1) {
        result.push(current.value);
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log("Tree right view: " + tree_right_view(root));
