let maxCPU = 0,
  currentCPU = 0;
let heap = [];

jobs.sort((a, b) => a.start - b.start);

for (var i = 0; i < jobs.length; i++) {
  while (heap.length > 0 && jobs[i].start >= heap[heap.length - 1].end) {
    currentCPU -= heap.pop().cpu_load;
  }

  heap.push(jobs[i]);
  currentCPU += jobs[i].cpu_load;
  maxCPU = Math.max(maxCPU, currentCPU);
}

return maxCPU;
