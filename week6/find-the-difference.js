var findTheDifference = function (s, t) {
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();

  for (var i = 0; i < t.length; i++) {
    if (sortedT[i] !== sortedS[i]) return sortedT[i];
  }
};
