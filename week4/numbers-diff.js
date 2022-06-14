const numberPairsDiff = (k, arr) => {
  arr.sort((a, b) => a - b);
  const obj = {};
  let pairs = 0;

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (!obj[key]) {
      let diff = Math.abs(key - k);

      if (obj[diff]) pairs++;

      obj[key] = 1;
    } else if (k === 0) {
      pairs++;
    }
  }

  return pairs;
};

console.log(numberPairsDiff(0, [1, 1, 1, 2, 2]));
