const topological_sort = function (vertices, edges) {
  sortedOrder = [];
  if (vertices <= 0) {
    return sortedOrder;
  }

  const graph = Array(vertices)
    .fill(0)
    .map((el) => []);
  const inDgree = Array(vertices).fill(0);

  edges.forEach((edge) => {
    const parent = edge[0];
    const child = edge[1];

    graph[parent].push(child);
    inDgree[child]++;
  });

  const sources = [];

  for (var i = 0; i < inDgree.length; i++) {
    if (inDgree[i] == 0) {
      sources.push(i);
    }
  }

  while (sources.length > 0) {
    const currentSource = sources.shift();
    sortedOrder.push(currentSource);
    graph[currentSource].forEach((child) => {
      inDgree[child]--;
      if (inDgree[child] == 0) {
        sources.push(child);
      }
    });
  }

  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
};

console.log(
  `Topological sort: ${topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])}`
);
