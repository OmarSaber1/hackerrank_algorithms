var threeSum = function (arr) {
  triplets = [];

  arr.sort((a, b) => a - b);

  for (var i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;

    tripletSum(arr, triplets, arr[i], i + 1, arr.length - 1);
    console.log(triplets);
  }

  return triplets;
};

// [-4,-1,-1,0,1,2]
function tripletSum(arr, triplets, num, left, right) {
  while (left < right) {
    const total = num + arr[left] + arr[right];

    if (total === 0) {
      triplets.push([num, arr[left], arr[right]]);

      right--;
      left++;

      while (arr[left] === arr[left - 1] && left < right) {
        left++;
      }
      while (arr[right] === arr[right + 1] && left < right) {
        right--;
      }
    } else if (total > 0) {
      right--;
    } else {
      left++;
    }
  }
}

threeSum([-1, 0, 1, 2, -1, -4]);
