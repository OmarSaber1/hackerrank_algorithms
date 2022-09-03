/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  const dequeue = [root];

  while (dequeue.length > 0) {
    const dequeueLength = dequeue.length;

    let prev = null;

    for (var i = 0; i < dequeueLength; i++) {
      const current = dequeue.shift();

      if (current.left) dequeue.push(current.left);

      if (current.right) dequeue.push(current.right);
      if (prev) {
        prev.next = current;
      }
      prev = current;
    }
  }

  return root;
};
