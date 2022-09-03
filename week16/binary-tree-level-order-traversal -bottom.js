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
var levelOrderBottom = function (root) {
  if (!root) return [];
  const results = [];

  const dequeue = [root];

  while (dequeue.length > 0) {
    const dequeueLength = dequeue.length;
    const currentLevelArr = [];

    for (var i = 0; i < dequeueLength; i++) {
      const currentNode = dequeue.shift();
      currentLevelArr.push(currentNode.val);

      if (currentNode.left) dequeue.push(currentNode.left);

      if (currentNode.right) dequeue.push(currentNode.right);
    }

    results.unshift(currentLevelArr);
  }

  return results;
};
