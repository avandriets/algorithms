function mergeArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let first = 0, second = 0;

  while (first < arr1.length && second < arr1.length) {
    if (arr1[first] < arr2[second]) {
      result.push(arr1[first]);
      first++;
    } else {
      result.push(arr2[second]);
      second++;
    }
  }

  while (first < arr1.length) {
    result.push(arr1[first]);
    first++;
  }

  while (second < arr2.length) {
    result.push(arr2[second]);
    second++;
  }

  return result;
}

const source1 = [1, 2, 4, 6, 8, 9, 14, 15];
const source2 = [5, 21, 22];

console.log(`Merging two arrays array one ${source1}, array two ${source2}, ${mergeArrays(source1, source2)}`);
