const canBeEqual = (target, arr) => {
  if (target.length !== arr.length) return false;

  if (target.length == 1 && arr.length == 1 && arr[0] == target[0]) return true;

  const sortedTarget = target.sort();
  const sortedArr = arr.sort();

  let isEqual = true;

  for (let i = 0; i < target.length; i++) {
    if (sortedTarget[i] !== sortedArr[i]) {
      isEqual = false;
      false;
    }
  }
  return isEqual;
};

console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
