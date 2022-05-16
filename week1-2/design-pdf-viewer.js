const h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5,
];

let maxHeight = 0;

const splitedWord = "torn".split("");

const charactersNestedObject = h.reduce((a, b, i) => {
  return { ...a, [String.fromCharCode(i + 97)]: b };
}, {});

for (var i = 0; i < splitedWord.length; i++) {
  maxHeight = Math.max(maxHeight, charactersNestedObject[splitedWord[i]]);
}

console.log(maxHeight, maxHeight * splitedWord.length);
