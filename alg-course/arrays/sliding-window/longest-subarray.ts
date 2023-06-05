function longestSubarray(nums: number[], k: number): number[] {
  const window: number[] = [];
  let left = 0, right = 0, currentSum = 0, maxLen = 0;
  let hash: { [key: number]: number[] } = {};

  while (right < nums.length) {
    currentSum += nums[right];
    window.push(nums[right]);

    while (currentSum > k) {
      currentSum -= nums[left];
      window.shift();
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    hash[window.length] = [...window];

    right++;
  }

  return hash[maxLen];
}

const initial = [3, 1, 2, 7, 4, 2, 1, 1, 5];
const k = 8;

console.log(`Longest subarray of [${initial}] is [${longestSubarray(initial, k)}]`);
