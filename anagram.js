const anagram = (s, t) => {
  console.log(s.split("").sort().join("") == t.split("").sort().join(""));
};

console.log(anagram("anagram", "nagaram"));
