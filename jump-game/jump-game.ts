function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (i + 1 + nums[i] >= nums.length) {
      return true;
    }
  }
  return false;
}

// function canJump(nums: number[]): boolean {
//   if (nums.length === 1) {
//     return true;
//   }
//
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (i > max) {
//       return false;
//     }
//     max = Math.max(max, i + nums[i]);
//     console.log(`index=${i} value=${nums[i]} max=${max}`);
//   }
//
//   return true;
// }

// console.log(canJump([1, 2, 3]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([2, 3, 1, 1, 4]));
