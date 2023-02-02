function nextPermutation(nums: number[]): void {
  let pivotIndex = nums.length - 1;
  let rightMinimal = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (!i || nums[i] > nums[i - 1]) {
      pivotIndex = i - 1;
      break;
    }
  }

  for (let i = nums.length - 1; i >= pivotIndex; i--) {
    if (nums[i] > nums[pivotIndex] && pivotIndex >= 0 && (rightMinimal < 0 || nums[rightMinimal] > nums[i])) {
      rightMinimal = i;
    }
  }

  // swap right-min and pivot point
  if (pivotIndex >= 0) {
    const buffer = nums[pivotIndex];
    nums[pivotIndex] = nums[rightMinimal];
    nums[rightMinimal] = buffer;
  }

  // reverse tail
  if (nums.length - pivotIndex > 1 && nums.length > 2) {
    for (let j = pivotIndex + 1, k = nums.length - 1; j <= k; j++, k--) {

      // console.log(`left=${j} right=${k}`);

      if (j <= k) {
        const buffer = nums[j];
        nums[j] = nums[k];
        nums[k] = buffer;
      } else {
        break;
      }
    }
  }
}

console.log([1, 3, 2]);
nextPermutation([1, 3, 2]);

// console.log([1, 1]);
// nextPermutation([1, 1]);
//
// console.log([1, 2]);
// nextPermutation([1, 2]);
//
// console.log([3, 2, 1]);
// nextPermutation([3, 2, 1]);

// console.log([1, 2, 3, 6, 5, 4]);
// nextPermutation([1, 2, 3, 6, 5, 4]);

// console.log([1, 2, 3]);
// nextPermutation([1, 2, 3]);

// console.log([1, 1, 5]);
// nextPermutation([1, 1, 5]);

// console.log([2, 4, 1, 7, 5, 0]);
// nextPermutation([2, 4, 1, 7, 5, 0]);
