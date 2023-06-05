function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let result = 0, left = 0, currentProd = 1;

  if (k <= 0) {
    return 0;
  }

  for (let right = 0; right < nums.length; right++) {
    currentProd *= nums[right];

    while (currentProd >= k) {
      currentProd /= nums[left];
      left++;
    }
    // console.log('##', right - left + 1);
    result += right - left + 1;
  }

  return result;
}

const initial = [10, 5, 2, 6];
const k = 100;

console.log(`Number subarray of products of[${initial}] less than K=${k} is ${numSubarrayProductLessThanK(initial, k)}`);
