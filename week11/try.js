function findMissingOdd(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 2 !== arr[i + 1]) return arr[i] + 2;
  }
}

console.log(findMissingOdd([1, 3, 5, 9]));
