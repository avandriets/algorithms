const map = [0, 5, 0, 2, 0, 3];

function calculateVolume(src: number[]): number {
  let volume = 0;
  let leftIndex = 0, rightIndex = src.length - 1;
  let leftHeight = src[0];
  let rightHeight = src[src.length - 1];

  while (leftIndex < rightIndex) {
    if (leftHeight > rightHeight) {
      rightIndex--;

      if (rightHeight - src[rightIndex] > 0) {
        volume += rightHeight - src[rightIndex];
      } else {
        rightHeight = Math.max(src[rightIndex], rightHeight);
      }
    } else {
      leftIndex++;

      if (leftHeight - src[leftIndex] > 0) {
        volume += leftHeight - src[leftIndex];
      } else {
        leftHeight = Math.max(src[leftIndex], leftHeight);
      }
    }
  }

  return volume;
}

console.log(`Volume: ${calculateVolume(map)}`);
