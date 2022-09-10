let solveKnapsack = function (profits, weights, capacity) {
  // TODO: Write your code here
  function knapsackRecusion(profits, weights, capacity, currentIndex) {
    if (capacity <= 0 || currentIndex >= profits.length) return 0;

    let profit1 = 0;

    if (weights[currentIndex] <= capacity) {
      profit1 =
        profits[currentIndex] +
        knapsackRecusion(
          profits,
          weights,
          capacity - weights[currentIndex],
          currentIndex + 1
        );
    }

    let profit2 = knapsackRecusion(
      profits,
      weights,
      capacity,
      currentIndex + 1
    );

    return Math.max(profit1, profit2);
  }
  return knapsackRecusion(profits, weights, capacity, 0);
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
);
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
);
