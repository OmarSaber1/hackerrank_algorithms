var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    const currentGuess = guess(mid);

    if (currentGuess === 0) return mid;
    if (currentGuess === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};
