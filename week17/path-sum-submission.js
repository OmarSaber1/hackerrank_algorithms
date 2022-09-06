/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, S, currentPath = []) {
  if (!root) return 0;

  (totalPath = 0), (sum = 0);

  currentPath.push(root.val);

  for (i = currentPath.length - 1; i >= 0; i--) {
    sum += currentPath[i];
    if (sum == S) totalPath++;
  }

  totalPath += pathSum(root.left, S, currentPath);
  totalPath += pathSum(root.right, S, currentPath);

  currentPath.pop();

  return totalPath;
};
