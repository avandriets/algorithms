function trap(height: number[]): number {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let volume = 0;

  let maxLeft = height[0];
  let maxRight = height[height.length - 1];

  while (leftIndex < rightIndex) {

    if (maxLeft < maxRight) {
      if (maxLeft > height[leftIndex]) {
        // console.log('left vol', maxLeft, height[leftIndex], maxLeft - height[leftIndex]);
        volume += maxLeft - height[leftIndex];
      } else {
        maxLeft = Math.max(maxLeft, height[leftIndex]);
      }
    } else {
      if (maxRight > height[rightIndex]) {
        // console.log('right vol', maxRight, height[rightIndex], maxRight - height[rightIndex]);
        volume += maxRight - height[rightIndex];
      } else {
        maxRight = Math.max(maxRight, height[rightIndex]);
      }
    }

    if (maxLeft < maxRight) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return volume;
}

// console.log('6=', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log('9=', trap([4, 2, 0, 3, 2, 5]));
console.log('2=', trap([2, 0, 2]));
