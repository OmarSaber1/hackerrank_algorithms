var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;

  const arr = s.split("");

  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "A",
    E: "E",
    I: "I",
    O: "O",
    U: "U",
  };

  while (left < right) {
    if (!vowels[arr[left]]) {
      left++;
    }

    if (!vowels[arr[right]]) {
      right--;
    }

    if (vowels[arr[left]] && vowels[arr[right]]) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
};
