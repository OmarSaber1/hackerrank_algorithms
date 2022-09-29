function buildTree(preOrder, inOrder) {
  p, (i = 0);

  function Tree(stop) {
    if (inOrder[i] !== stop) {
      const root = new TreeNode(preOrder[p++]);
      root.left = Tree(root.val);
      i++;
      root.right = Tree(stop);
      return root;
    }
    return null;
  }

  return Tree();
}

buildTree((p = [3, 9, 20, 15, 7]), (n = [9, 3, 15, 20, 7]));

//3;

//9;
//sasfas
