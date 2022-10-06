var findTilt = function (root) {
  let tot = 0;

  findSum(root);

  return tot;

  function findSum(node) {
    // base case
    if (node == null) return 0;

    const left = findSum(node.left);
    const right = findSum(node.right);

    const sum = left + right;
    tot += Math.abs(left - right);
    console.log(left, right, sum, tot, node.val);

    return sum + node.val;
  }
};
