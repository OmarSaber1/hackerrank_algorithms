/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let hashParagraph = {};
  let hashBanned = new Set(banned);
  let maxFreq = 0;
  let wordRes = "";

  for (var key of paragraph.toLowerCase().split(/\W+/)) {
    if (!hashBanned.has(key)) {
      hashParagraph[key] ? hashParagraph[key]++ : (hashParagraph[key] = 1);
    }
    if (hashParagraph[key] > maxFreq) {
      maxFreq = hashParagraph[key];
      wordRes = key;
    }
  }

  return wordRes;
};
