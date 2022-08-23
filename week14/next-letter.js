const search_next_letter = function (letters, key) {
  // TODO: Write your code here

  if (letters[letters.length - 1] <= key) return letters[0];

  let left = 0,
    right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (letters[mid] === key) return letters[mid + 1];

    if (letters[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return letters[left];
};

console.log(search_next_letter(["a", "c", "f", "h"], "f"));
console.log(search_next_letter(["a", "c", "f", "h"], "b"));
console.log(search_next_letter(["a", "c", "f", "h"], "m"));
