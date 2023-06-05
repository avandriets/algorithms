function minStartValue(nums: number[]): number {
  let prefix: number[] = [nums[0]];
  let minSum = prefix[0];

  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i] + prefix[prefix.length - 1];

    minSum = Math.min(minSum, sum);
    prefix.push(sum);
  }

  return minSum < 0 ? minSum * (-1) + 1 : 1;
}

const inputs = [-3, 6, 2, 5, 8, 6];

console.log(`Input array=[${inputs}] [${minStartValue(inputs)}] `);
