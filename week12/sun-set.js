function sunSet(buildings) {
  const results = [];

  for (let i = 0; i < buildings.length - 1; i++) {
    let minFloors = Infinity;
    let isTallest = true;

    for (let j = i + 1; j < buildings.length; j++) {
      if (buildings[i] > buildings[j]) {
        minFloors = Math.min(minFloors, buildings[i] - buildings[j]);
      } else {
        isTallest = false;
        break;
      }
    }

    isTallest ? results.push(minFloors) : results.push(0);
  }

  return results;
}

console.log(sunSet([6, 2, 3, 7, 1, -1, 1]));
