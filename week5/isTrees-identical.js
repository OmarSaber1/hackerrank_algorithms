var isSameTree = function (p, q) {
  let isMatched = true;

  function getTreeNodes(p, q) {
    if (p?.val !== q?.val) {
      isMatched = false;
      return;
    }

    if (!p || !q) return;

    getTreeNodes(p.right, q.right);
    getTreeNodes(p.left, q.left);
  }

  getTreeNodes(p, q);

  return isMatched;
};
