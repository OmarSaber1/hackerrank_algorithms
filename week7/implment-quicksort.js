function quickSort(arr) {
  if (arr.length === 1) return arr;

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, quickSort(rightArr)];
  }
}

console.log(quickSort([10, 80, 30, 90, 40, 50, 70]));
