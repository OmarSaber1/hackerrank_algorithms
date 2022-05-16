const containerWithMostWater = (height = []) => {
  //    we need the bigger =>> highest

  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[right], height[left]);
    if (area > maxArea) maxArea = area;
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
