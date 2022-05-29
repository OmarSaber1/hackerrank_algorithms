var lengthOfLastWord = function (s) {
  const trimmedArray = s.trim().split(" ");
  console.log(trimmedArray[trimmedArray.length - 1]);
  return s.trim().split(" ")[4];
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
