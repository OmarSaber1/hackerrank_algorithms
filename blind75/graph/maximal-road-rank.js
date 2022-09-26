var maximalNetworkRank = function (n, roads) {
  const count = Array(n).fill(0);

  const graph = Array(n)
    .fill(0)
    .map((el) => Array(n).fill(false));

  for (var [from, to] of roads) {
    graph[from][to] = true;
    graph[to][from] = true;

    count[from]++;
    count[to]++;
  }

  let max = 0;

  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      let total = count[i] + count[j] - (graph[i][j] ? 1 : 0);
      max = Math.max(max, total);
    }
  }

  return max;
};

/*    const count = Array(n).fill(0);

  const mat = Array(n)
    .fill(null)
    .map(() => Array(n).fill(false));

  roads.forEach(([a, b]) => {
    mat[a][b] = true;
    mat[b][a] = true;

    count[a]++;
    count[b]++;
  });
    
  let res = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        console.log(mat[i][j],count)
      let aux = count[i] + count[j] - (mat[i][j] ? 1 : 0);
      res = Math.max(aux, res);
    }
  }

  return res;*/
