function groupAnagram(strs = []) {
  const hashCounts = {};

  for (var str of strs) {
    const currentWord = str.split("").sort().join("");

    if (!hashCounts[currentWord]) {
      hashCounts[currentWord] = [str];
    } else {
      hashCounts[currentWord].push(str);
    }
  }

  return Object.values(hashCounts);
}

console.log(
  groupAnagram([
    "cab",
    "tin",
    "pew",
    "duh",
    "may",
    "ill",
    "buy",
    "bar",
    "max",
    "doc",
  ])
);
