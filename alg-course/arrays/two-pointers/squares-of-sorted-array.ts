function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];
  let left = 0, right = nums.length - 1;

  while (left < right) {
    const first = nums[left] * nums[left];
    const second = nums[right] * nums[right];

    if (first < second) {
      console.log('second', second);
      result.unshift(second);
      right--;
    } else {
      console.log('first', first);
      result.unshift(first);
      left++;
    }
  }

  if (left === right) {
    result.unshift(nums[left] * nums[left]);
  }

  return result;
}

const source = [-4, -1, 0, 3, 10];
console.log(`Square sorted array ${source} is ${sortedSquares(source)}`);
