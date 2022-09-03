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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  result = 0;
  queue = [root];

  while (queue.length > 0) {
    result++;
    const queueLength = queue.length;

    for (var i = 0; i < queueLength; i++) {
      const currentNode = queue.shift();

      if (!currentNode.left && !currentNode.right) return result;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return result;
};
