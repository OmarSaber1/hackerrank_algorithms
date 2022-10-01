/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (c) {
  let str = "";

  while (c > 0) {
    let r = c % 26;
    let d = parseInt(c / 26);

    if (r == 0) {
      r = 26;
      d--;
    }

    str = String.fromCharCode(r + 64) + str;
    c = d;
  }

  return str;
};
