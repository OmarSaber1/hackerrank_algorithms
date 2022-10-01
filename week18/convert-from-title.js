/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (title) {
  let n = 0;

  for (var i = 0; i < title.length; i++) {
    let char = title[title.length - 1 - i];

    n += Math.pow(26, i) * (char.charCodeAt(0) - 64);
  }

  return n;
};
