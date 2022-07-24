var sortByBits = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    const numberOfBits = arr[i]
      .toString(2)
      .split("")
      .filter((el) => el == 1).length;
    arr[i] = [numberOfBits, arr[i]];
  }

  arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return arr.map((el) => el[1]);
};
