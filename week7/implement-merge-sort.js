// [ 38, 27, 43, 3 ]
// [ 38 , 27]  [ 43 , 3 ]
// [ 38 ] [ 27]  =>> [ 27 , 38 ]

function merge(leftArray, rightArray) {
  console.log(leftArray, rightArray);
  const sortedArray = [];

  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArray.length && rightIdx < rightArray.length) {
    if (leftArray[leftIdx] < rightArray[rightIdx]) {
      sortedArray.push(leftArray[leftIdx]);
      leftIdx++;
    } else {
      sortedArray.push(rightArray[rightIdx]);
      rightIdx++;
    }
  }

  return [
    ...sortedArray,
    ...leftArray.slice(leftIdx),
    ...rightArray.slice(rightIdx),
  ];
}

function mergeSort(arr) {
  console.log(arr);
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([12, 11, 13, 5, 6, 7]));
