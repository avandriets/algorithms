function numberOfWaysToSplitArray(nums: number[]): number {
  let result = 0;
  let prefix: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  for (let i = 0; i < prefix.length - 1; i++) {
    const left = prefix[i];
    const right = prefix[prefix.length - 1] - prefix[i];

    if (left >= right) {
      result++;
    }
  }

  return result;
}

const inputs = [10, 4, -8, 7];

console.log(`Input array=[${inputs}] [${numberOfWaysToSplitArray(inputs)}] `);
