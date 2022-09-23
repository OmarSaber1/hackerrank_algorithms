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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function reverseRecusionTree(t) {
    if (!t) return;

    temp = t.left;
    t.left = t.right;
    t.right = temp;

    reverseRecusionTree(t.left);
    reverseRecusionTree(t.right);
  }

  reverseRecusionTree(root);

  return root;
};
