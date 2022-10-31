/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const toBinary = Number(n).toString(2);

  let max = 0,
    start = 0;

  for (var end = 0; end < toBinary.length; end++) {
    if (toBinary[end] === "1") {
      max = Math.max(max, end - start);
      start = end;
    }
  }

  return max;
};
