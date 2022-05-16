function firstNonRepeat(Str = "") {
  for (let i = 0; i < Str.length; i++) {
    if (Str.indexOf(Str[i]) === Str.lastIndexOf(Str[i])) return i;
  }
  return -1;
}

console.log(firstNonRepeat("leetcode"));
