var findRelativeRanks = function (score) {
  const nonSortedArray = [...score];
  const results = [];

  score.sort((a, b) => b - a);

  const medal = {
    1: "Gold Medal",
    2: "Silver Medal",
    3: "Bronze Medal",
  };

  const obj = {};

  for (var i = 0; i < score.length; i++) {
    obj[score[i]] = i + 1;
  }

  for (var i = 0; i < nonSortedArray.length; i++) {
    results.push(medal[obj[nonSortedArray[i]]] || "" + obj[nonSortedArray[i]]);
  }

  return results;
};
