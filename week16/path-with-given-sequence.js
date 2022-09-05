class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_path = function (root, sequence, sum = 0) {
  // TODO: Write your code here

  if (!root) return false;

  sum = sum * 10 + root.value;

  if (sum == sequence.join("")) return true;

  // 1
  // 0 1
  // 1 6  5

  return (
    find_path(root.left, sequence, sum) || find_path(root.right, sequence, sum)
  );
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
