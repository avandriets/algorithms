function maximumAverageSubarray(nums: number[], k: number): number {
  let result = 0, curr = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i] / k;
  }

  result = curr;

  for (let j = k; j < nums.length; j++) {
    curr += ((nums[j] / k) - (nums[j - k] / k));

    result = Math.max(result, curr);
  }

  return result;
}

const initial = [1, 12, -5, -6, 50, 3];
const k = 4;

// const initial = [5];
// const k = 1;

console.log(`Input: nums = [${initial}], k = ${k} Output: ${maximumAverageSubarray(initial, k)}`);
