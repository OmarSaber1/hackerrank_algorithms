var selfDividingNumbers = function (left, right) {
  const results = [];

  for (var i = left; i <= right; i++) {
    const currentStringDigit = "" + i;
    let flag = true;

    for (var j = 0; j < currentStringDigit.length; j++) {
      if (i % currentStringDigit[j] || currentStringDigit[j] == 0) {
        flag = false;
        break;
      }
    }

    if (flag) results.push(i);
  }

  return results;
};
