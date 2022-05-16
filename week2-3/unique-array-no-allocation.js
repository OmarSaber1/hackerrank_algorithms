function uniqueArray(arr) {
  let newArr = [...new Set(arr)];
  for (let i = 0; i < newArr.length; i++) {
    arr[i] = newArr[i];
  }

  return arr;
}

console.log(uniqueArray([1, 1, 1, 2, 2, 3, 5, 5]));
