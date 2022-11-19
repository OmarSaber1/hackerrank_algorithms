var commonChars = function (words) {
  const results = [];

  const firstWordSplited = [...words[0]];

  for (var c of firstWordSplited) {
    if (words.every((word) => word.includes(c))) {
      results.push(c);
      words = words.map((word) => word.replace(c, ""));
    }
  }

  return results;
};
