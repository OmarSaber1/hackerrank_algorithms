/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  if (num == 0) return "0";

  if (num < 0) {
    nums += Math.pow(2, 32);
  }

  let res = "";

  while (num > 0) {
    const digit = num % 16;
    res = arr[digit] + res;

    num = Math.floor(num / 16);
  }

  return res;
};
