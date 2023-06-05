function binary_search(value: number, nums: number[]): number {
  let left = 0;
  let right = nums.length;
  let middle = Math.floor((right + left) / 2);

  if (value > nums[middle]) {
    left = middle;
  } else {
    right = middle;
  }

  while (nums[middle] !== value) {
    middle = Math.floor((right + left) / 2);

    if (value > nums[middle]) {
      left = middle;
    } else {
      right = middle;
    }
  }

  return middle;
}

console.log('###',
  binary_search(1, [5, 4, 3, 7, 8, 10, 1].sort((a, b) => a - b))
);
