const getLongestPrefix = (arr) => {
  let longestPrefix = "";

  if (arr.length === 1) return arr[0];

  const longestString = arr.reduce((a, b) => {
    return Math.max(a.length || a, b.length || b);
  }, []);

  let flag = true;

  for (let i = 0; i < longestString; i++) {
    let prefixString = arr[0][i];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][i] !== prefixString) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
    longestPrefix += prefixString;
  }
  return longestPrefix;
};

console.log(getLongestPrefix(["dog", "racecar", "car"]), "retur");
