function fixedWindowSize(nums: number[], limit: number): number {
  let result = 0, currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  result = currentSum;

  for (let right = k; right < nums.length; right++) {
    currentSum += (nums[right] - nums[right - k]);
    result = Math.max(currentSum, result);
  }

  return result;
}

const initial = [3, -1, 4, 12, -8, 5, 6];
const k = 4;

console.log(`Longest subarray of [${initial}] is [${fixedWindowSize(initial, k)}]`);
