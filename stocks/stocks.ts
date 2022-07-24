const stocks = [7, 1, 5, 3, 6, 4];
// const stocks = [4, 6, 3, 5, 1, 7];

console.log('###', getMaximumRevenue(stocks));

function getMaximumRevenue(src: number[]): number {
  let leftIndex = 0;
  let rightIndex = src.length - 1;

  let leftMin = src[0];
  let rightMax = src[src.length - 1];

  let max = 0;

  while (leftIndex < rightIndex) {
    if (src[leftIndex] > src[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }

    leftMin = Math.min(src[leftIndex], leftMin);
    rightMax = Math.max(src[rightIndex], rightMax);

    max = Math.max(rightMax - leftMin, max);
  }

  return max;
}
