var isAlienSorted = function (words, order) {
  const hash = {};

  for (var i = 0; i < order.length; i++) {
    hash[order[i]] = i;
  }

  for (var i = 1; i < words.length; i++) {
    const curr = words[i],
      prev = words[i - 1];

    if (hash[curr[0]] < hash[prev[0]]) return false;

    if (hash[curr[0]] == hash[prev[0]]) {
      let p = 0;

      while (hash[curr[p]] == hash[prev[p]] && curr[p]) {
        p++;
      }

      if (curr[p] == undefined && prev[p]) return false;

      if (hash[curr[p]] < hash[prev[p]]) return false;
    }
  }

  return true;
};
