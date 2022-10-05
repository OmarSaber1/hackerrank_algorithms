/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const newStr = s.replace(/[-]/g, "");

  const arrFromStr = newStr.split("");

  for (var i = newStr.length - 1 - k; i >= 0; i -= k) {
    arrFromStr[i] += "-";
  }

  return arrFromStr.join("").toUpperCase();
};
