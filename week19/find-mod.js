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
 * @return {number[]}
 */
var findMode = function (root) {
  let res = [];

  if (!root) return res;

  const hash = {};
  let max = 0;

  (function dfs(head) {
    if (!head) return;

    hash[head.val] == undefined ? (hash[head.val] = 1) : hash[head.val]++;

    if (hash[head.val] > max) {
      max = hash[head.val];
    }

    dfs(head.left);
    dfs(head.right);
  })(root);

  Object.keys(hash).forEach((e) => {
    if (hash[e] == max) res.push(e);
  });

  return res;
};
