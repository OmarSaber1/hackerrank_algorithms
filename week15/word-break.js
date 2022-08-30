function wordBreak(arr) {
  const word = arr[0].split("").sort().join("");

  const words = arr[1].split(",");

  let str = "";

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    str = currentWord;
    for (let j = i + 1; j < words.length; j++) {
      str += words[j];
      let tempWord = str.split("").sort().join("");
      if (tempWord === word) return [words[i], words[j]];
      str = currentWord;
    }
  }

  return "not possible";
}

const res = wordBreak(["baseball", "a,all,b,ball,base,cate,code,d,e,quit,z"]);
console.log(res, "res");

const res2 = wordBreak(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,ef,zzzz"]);
console.log(res2, "res2");
