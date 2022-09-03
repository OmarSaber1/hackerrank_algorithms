class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // tree traversal using 'next' pointer
  print_tree() {
    result = "Traversal using 'next' pointer: ";
    current = this;
    while (current != null) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result);
  }
}

const connect_all_siblings = function (root) {
  // TODO: Write your code here
  if (!root) return root;

  const queue = [root];
  let prev = null;

  while (queue.length > 0) {
    const queueLength = queue.length;

    for (var i = 0; i < queueLength; i++) {
      const current = queue.shift();

      if (prev) {
        prev.next = current;
      }
      prev = current;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return root;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
root.print_tree();
