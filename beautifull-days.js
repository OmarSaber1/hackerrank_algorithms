function beautifulDays(i, j, k) {
  // Write your code here
  let beautifulDays = 0;

  for (var day = i; day <= j; day++) {
    let numberDifference = Math.abs(
      day - ("" + day).split("").reverse().join("")
    );
    if (numberDifference % k === 0) beautifulDays++;
  }

  return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));
