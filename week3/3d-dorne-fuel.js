const droneFuel = (arr) => {
  let fuel = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][2] > arr[i + 1][2]) {
      fuel += arr[i][2] - arr[i + 1][2];
    } else {
      fuel += arr[i][2] - arr[i + 1][2];
    }

    if (fuel < 0) return fuel * -1;
  }
};

console.log(
  droneFuel([
    [0, 2, 10],
    [3, 5, 0],
    [9, 20, 6],
    [10, 12, 15],
    [10, 10, 8],
  ])
);
