var canFinish = function (vertices, edges) {
  const topoSort = [];

  if (vertices <= 0) return topoSort;

  const graph = Array(vertices)
    .fill(0)
    .map((el) => []);
  const inDegree = Array(vertices).fill(0);

  edges.forEach((edge) => {
    const parent = edge[0];
    const child = edge[1];
    graph[parent].push(child);
    inDegree[child]++;
  });

  const source = [];

  for (var i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) source.push(i);
  }

  while (source.length > 0) {
    console.log(source);

    const currentSource = source.shift();
    topoSort.push(currentSource);

    graph[currentSource].forEach((n) => {
      inDegree[n]--;
      if (inDegree[n] == 0) {
        source.push(n);
      }
    });
  }

  if (topoSort.length !== vertices) return [];

  return true;
};

/*      sortedOrder = [];
 if (vertices <= 0) {
    return sortedOrder;
  }

  const graph = Array(vertices).fill(0).map(el=>[]);
  const inDgree = Array(vertices).fill(0);

  edges.forEach(edge=>{
    const parent = edge[0];
    const child = edge[1];

    graph[parent].push(child);
    inDgree[child]++;
  })

  const sources = [];

  for(var i = 0 ; i <inDgree.length ; i++){
    if(inDgree[i] == 0){
      sources.push(i)
    }
  }

  while(sources.length > 0){
    const currentSource = sources.shift();
  sortedOrder.push(currentSource)
    graph[currentSource].forEach(child=>{
      inDgree[child]--;
      if(inDgree[child] ==0){
        sources.push(child)
      }
    })
  }

  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder.length === vertices;*/
