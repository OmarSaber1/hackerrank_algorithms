/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  sentence = sentence.split(" ");
  let repeatA = 2;
  let hash = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "a",
    E: "e",
    I: "i",
    O: "o",
    U: "u",
  };

  for (var i = 0; i < sentence.length; i++) {
    if (hash[sentence[i][0]]) {
      sentence[i] = sentence[i] + "m" + "a".repeat(repeatA);
    } else {
      sentence[i] =
        sentence[i].slice(1) +
        sentence[i].slice(0, 1) +
        "m" +
        "a".repeat(repeatA);
    }

    repeatA++;
  }

  return sentence.join(" ");
};
