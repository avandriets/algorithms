function maxArea(height: number[]): number {
  let max = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    const minHeight = Math.min(height[leftIndex], height[rightIndex]);

    max = Math.max(max, minHeight * (rightIndex - leftIndex));

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return max;
}

console.log('[1,8,6,2,5,4,8,3,7] 49 === ', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log('[1,1] 1 === ', maxArea([1, 1]));
