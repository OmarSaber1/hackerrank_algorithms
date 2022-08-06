const backspace_compare = function (str1, str2) {
  // TODO: Write your code here
  const arr1 = [];
  const arr2 = [];

  for (var key of str1) {
    if (key == "#") {
      console.log(key, arr1);
      arr1.pop();
    } else {
      arr1.push();
    }
  }

  for (var key of str2) {
    if (key == "#") {
      arr2.pop();
    } else {
      arr2.push();
    }
  }
  console.log(arr1, arr2);
  return arr1.join("") == arr2.join("");
};

console.log(backspace_compare("xy#z", "xyz#"));
