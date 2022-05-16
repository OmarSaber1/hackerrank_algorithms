const isOneTwoThreePattern = (arr) => {
  let min = arr[0];
  let k = 0;
  let j = 1;

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[j] > arr[i + 2]) {
      k = arr[i + 2];
      if (min < k) return true;
      min = Math.min(arr[j], min);
    } else {
      min = Math.min(arr[j], min);
      j += 1;
    }
  }

  return false;
};
console.log(isOneTwoThreePattern([1, 4, 0, -1, -2, -3, -1, -2]));
