function solution(arr1, arr2) {
  let left = 0;
  let right = 0;

  for (var i = 0; i < arr2.length; i++) {
    right = left + 1;
    while (right < arr1.length - 1) {
      if (arr1[left] === arr2[i]) {
        left++;
      }

      if (arr1[right] === arr2[i]) {
        let temp = arr1[left];
        arr1[left] = arr1[right];
        arr1[right] = temp;
        left++;
      }

      right++;
    }
  }
  const spliced = arr1.splice(left).sort((a, b) => a - b);

  console.log(spliced);

  return [...arr1, ...spliced];
}

console.log(solution([2, 5, 1, 3, 4, 5, 2, 4, 5, 4], [5, 1, 2]));
