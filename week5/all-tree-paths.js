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
 * @return {string[]}
 */

let results = [];
function printArray(ints, len) {
  let path = `${ints[0]}`;
  for (var i = 1; i < len; i++) {
    path += `->${ints[i]}`;
  }
  results.push(path);
}

function printPathsRecur(node, path, pathLen) {
  if (node == null) return;

  path[pathLen] = node.val;
  pathLen++;

  if (node.left == null && node.right == null) printArray(path, pathLen);
  else {
    printPathsRecur(node.left, path, pathLen);
    printPathsRecur(node.right, path, pathLen);
  }
}

var binaryTreePaths = function (node) {
  results = [];
  printPathsRecur(node, [], 0);
  return results;
};
