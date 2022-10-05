/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  return words.filter(
    (word) =>
      word
        .toLowerCase()
        .split("")
        .every((c) => "qwertyuiop".includes(c)) ||
      word
        .toLowerCase()
        .split("")
        .every((c) => "asdfghjkl".includes(c)) ||
      word
        .toLowerCase()
        .split("")
        .every((c) => "zxcvbnm".includes(c))
  );
};
