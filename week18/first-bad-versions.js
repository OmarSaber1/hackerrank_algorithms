var solution = function (isBadVersion) {
  // [ 1 , 2 ,3 ,4 ,5]
  return function (n) {
    let left = 1,
      right = n;

    while (left < right) {
      mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};
