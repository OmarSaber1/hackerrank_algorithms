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
 * @return {number[][]}
 */
var levelOrder = function (head) {
  const queue = [];
  const results = [];

  if (!head) return [];

  queue.push(head);

  while (true) {
    let nodeCount = queue.length;
    if (nodeCount === 0) break;

    let temp = [];
    while (nodeCount > 0) {
      let removedNode = queue.shift();
      temp.push(removedNode.val);
      if (removedNode.left) {
        queue.push(removedNode.left);
      }
      if (removedNode.right) {
        queue.push(removedNode.right);
      }

      nodeCount--;
    }
    results.push(temp);
  }

  return results;
};
