function cloneGraph(node) {
  const visited = {};

  function dfs(node) {
    if (!node) return node;

    if (node.val in visited) return visited[node.val];

    const root = new Node(node.val);
    visited[node.val] = root;

    for (var n of node.neighbors) {
      root.neighbors.push(dfs(n));
    }

    return root;
  }

  return dfs(node);
}

//  var visited = {};

//     let dfs = function(node) {

//         if (!node) return node;
//         if (visited[node.val]!=null) return visited[node.val];

//         let root = new Node(node.val);

//         visited[node.val] = root;

//         for (let n of node.neighbors) {
//         console.log(n)

//             root.neighbors.push(dfs(n));
//         }

//         return root;
//     }

//     return dfs(node);
