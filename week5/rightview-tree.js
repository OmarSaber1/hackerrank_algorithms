//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t) {
  const results = [];
  let maxLevel = 0;
  var level = 0;

  function rightTreeView(node, level) {
    if (node === null) return;
    console.log(level, node.value);

    if (level >= maxLevel) {
      results.push(node.value);
      maxLevel++;
    }

    rightTreeView(node.right, level + 1);
    rightTreeView(node.left, level + 1);
  }

  rightTreeView(t, 0);

  return results;
}
