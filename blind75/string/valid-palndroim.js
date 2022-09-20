/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const newStr = s.replace(/[^a-z0-9$]/gi, "").toLowerCase();

  return newStr.split("").reverse().join("") === newStr;
};

isPalindrome("A man, a plan, a canal: Panama");
