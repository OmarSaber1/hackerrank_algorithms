/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const obj = {};

  const joinedArr = [...s1.split(" "), ...s2.split(" ")];

  for (let key of joinedArr) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }

  const res = [];

  for (var key in obj) {
    if (obj[key] === 1) res.push(key);
  }

  return res;
};
