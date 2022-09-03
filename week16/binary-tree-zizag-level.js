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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  result = [];
  queue = [root];
  isZigzag = false;

  while (queue.length > 0) {
    const queueLength = queue.length;
    const currentLevelArr = [];

    for (var i = 0; i < queueLength; i++) {
      const currentNode = queue.shift();

      if (isZigzag) {
        currentLevelArr.unshift(currentNode.val);
      } else {
        currentLevelArr.push(currentNode.val);
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    isZigzag = !isZigzag;
    result.push(currentLevelArr);
  }
  return result;
};
