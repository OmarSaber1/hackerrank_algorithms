const moveZeros = (arr = []) => {
  let key = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr, key);
    if (arr[i] !== 0) {
      let temp = arr[key];
      arr[key] = arr[i];
      arr[i] = temp;
      key++;
    }
  }
  return arr;
};

console.log(moveZeros([0, 1, 3, 12, 13]));
