function canJump(
  array: number[],
  leftSortedArray: { index: number; value: number }[],
  rightSortedArray: { index: number; value: number }[],
  startIndex: number,
  finalIndex: number,
): boolean {
  let step = 1;
  let canJump = true;

  let currentIndex = startIndex;
  let currentValue = array[startIndex];

  while (canJump) {

    let resultElement: any = null;

    if (step % 2) {
      for (let i = 0; i < leftSortedArray.length; i++) {
        if (currentIndex < leftSortedArray[i].index && currentValue <= leftSortedArray[i].value) {
          resultElement = leftSortedArray[i];
          break;
        }
      }
    } else {
      for (let i = 0; i < rightSortedArray.length; i++) {
        if (rightSortedArray[i].index > currentIndex && rightSortedArray[i].value <= currentValue) {
          resultElement = rightSortedArray[i];
          break;
        }
      }
    }
    currentIndex = resultElement?.index ?? NaN;
    currentValue = resultElement?.value ?? NaN;

    canJump = !!resultElement && currentIndex !== finalIndex;
    step++;
  }

  return currentIndex === finalIndex;
}

function oddEvenJumps(arr: number[]): number {
  const leftSorted = arr.map((value, index) => ({ index, value }))
    .sort((a, b) => {
      return a.value - b.value || a.index - b.index;
    });

  const rightSorted = arr.map((value, index) => ({ index, value }))
    .sort((a, b) => {
      return b.value - a.value || a.index - b.index;
    });

  let count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    count += +canJump(arr, leftSorted, rightSorted, i, arr.length - 1);
  }

  return count;
}

console.log('[10, 13, 12, 14, 15] = 2 ', oddEvenJumps([10, 13, 12, 14, 15]), oddEvenJumps([10, 13, 12, 14, 15]) === 2);
console.log('[2, 3, 1, 1, 4] = 3 ', oddEvenJumps([2, 3, 1, 1, 4]), oddEvenJumps([2, 3, 1, 1, 4]) === 3);
console.log('[5, 1, 3, 4, 2] = 3 ', oddEvenJumps([5, 1, 3, 4, 2]), oddEvenJumps([5, 1, 3, 4, 2]) === 3);
console.log('[1, 1, 1, 1, 1] = 5 ', oddEvenJumps([1, 1, 1, 1, 1]), oddEvenJumps([1, 1, 1, 1, 1]) === 5);
console.log('[81, 54, 96, 60, 58] = 2 ', oddEvenJumps([81, 54, 96, 60, 58]), oddEvenJumps([81, 54, 96, 60, 58]) === 2);
console.log('[5, 1, 3, 4, 2] = 3 ', oddEvenJumps([5, 1, 3, 4, 2]), oddEvenJumps([5, 1, 3, 4, 2]) === 3);
