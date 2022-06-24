const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

  [1, 2, 3, 4, 5, 6];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) return mid;

    if (num > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return "No Such Number Exsits !!!!";
};

const numberIndex = binarySearch([1, 2, 3, 4, 5, 6], 2);
console.log(numberIndex);
