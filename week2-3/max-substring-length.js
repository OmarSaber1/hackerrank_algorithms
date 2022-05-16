/*
Given an array of integers, find the longest subarray where the absolute difference between 
any two elements is less than or equal to .
 */

function pickingNumbers(a) {
  // Write your code here
  let maxArrayLength = 2;

  let sortedArray = a.sort((a, b) => a - b);

  let maxSubArrayRepetition = 0;

  for (var i = 0; i < sortedArray.length; i++) {
    for (var j = i; j < sortedArray.length; j++) {
      if (sortedArray[j] - sortedArray[i] > 1) break;
      maxSubArrayRepetition++;
    }
    if (maxSubArrayRepetition > maxArrayLength) {
      maxArrayLength = maxSubArrayRepetition;
    }
    maxSubArrayRepetition = 0;
  }

  return maxArrayLength;
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])); // 5
