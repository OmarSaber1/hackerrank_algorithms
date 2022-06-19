var canConstruct = function (ransomNote, magazine) {
  const ransomObj = {};

  for (var i of magazine) {
    ransomObj[i] ? ransomObj[i]++ : (ransomObj[i] = 1);
  }

  for (var i of ransomNote) {
    if (!ransomObj[i]) return false;
    ransomObj[i]--;
  }

  return true;
};
