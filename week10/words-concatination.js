const find_word_concatenation = function (str, pattern) {
  let matched = 0,
    left = 0,
    word = "";
  const idx = [];

  console.log(pattern.join(""));

  for (var i = 0; i < pattern.length; i++) {
    for (var j = 0; j < pattern[i].length; j++) {
      word += pattern[i][j];
    }
  }
  for (var right = 0; right < str.length; right++) {
    while (right - left + 1 >= word.length) {
      console.log(
        word,
        str.slice(left, right + 1),
        left,
        right,
        pattern[1] + pattern[0]
      );
      if (
        word == str.slice(left, right + 1) ||
        pattern[1] + pattern[0] == str.slice(left, right + 1)
      ) {
        idx.push(left);
      }
      left++;
    }
  }
  return "";
};

find_word_concatenation("catfoxcat", ["cat", "fox"]);
