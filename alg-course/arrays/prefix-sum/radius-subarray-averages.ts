function getAverages(nums: number[], k: number): number[] {
  let result: number[] = [];
  let prefix: Number[] = [nums[0]];

  // TODO for some reason solution with reduce consume a lot of memory
  // const prefix: Number[] = nums
  //   .reduce((acc, e) => [...acc, Number((acc.length > 0 ? acc[acc.length - 1] : 0) + e)] as any, []);

  for (let i = 1; i < nums.length; i++) {
    prefix.push(Number(nums[i]) + Number(prefix[prefix.length - 1]));
  }

  result = nums.map((_, i) => {
    if (i - k >= 0 && i + k < nums.length) {
      const start = Number(i - k === 0 ? 0 : prefix[i - k - 1]);
      const end = Number(prefix[i + k]);
      return Math.floor((end - start) / (k * 2 + 1));
    } else {
      return -1;
    }
  });

  return result;
}

const initial: number[] = [7, 4, 3, 9, 1, 8, 5, 2, 6];
const k: number = 3;

// const initial: number[] = [100000];
// const k: number = 0;

// const initial: number[] = [8];
// const k: number = 100000;

console.log(`Input array=[${initial}] k=${k} output=[${getAverages(initial, k)}]`);
