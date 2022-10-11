/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root, arr = []) {
  if (!root) return arr;

  for (var child of root.children) {
    postorder(child, arr);
  }

  arr.push(root.val);

  return arr;
};
