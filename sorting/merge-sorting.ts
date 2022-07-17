const array = [7, 2, 3, 4, 5, 6, 1, 51, 33, 21, 18, 25];

const result = mergeSorting(array);

console.log('***', result.toString());

function mergeSorting(arr: number[]): number[] {
  if (arr.length < 2) {
    return [...arr];
  }

  const middle = Math.floor(arr.length / 2);

  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle, arr.length);

  return merge(mergeSorting(leftArray), mergeSorting(rightArray));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0, rightIndex = 0;

  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return [...result, ...left.slice(leftIndex, left.length), ...right.slice(rightIndex, right.length),];
}
