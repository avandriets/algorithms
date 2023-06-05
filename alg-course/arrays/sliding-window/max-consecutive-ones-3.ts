function maxConsecutiveOnes(nums: number[], k: number): number {
  let result = 0, curr = 0;
  let left = 0, right = 0, zeroNumber = 0;

  while (right < nums.length) {
    curr++;
    if (nums[right] === 0) {
      zeroNumber++;
    }

    while (zeroNumber > k) {
      if (nums[left] === 0) {
        zeroNumber--;
      }
      curr--;
      left++;
    }

    result = Math.max(curr, result);

    right++;
  }

  return result;
}

const initial = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

console.log(`Input [${initial}] k=${k} maximum consecutive is ${maxConsecutiveOnes(initial, k)}`);
