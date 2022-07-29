var numWaterBottles = function (numBottles, numExchange) {
  let totalFilled = numBottles,
    currentFilled = 0,
    currentEmpty = numBottles;

  while (currentFilled + currentEmpty >= numExchange) {
    const num = Math.floor((currentEmpty + currentFilled) / numExchange);
    const remendir = (currentEmpty + currentFilled) % numExchange;
    currentFilled = num;
    currentEmpty = remendir;
    totalFilled += currentFilled;
  }

  return totalFilled;
};
