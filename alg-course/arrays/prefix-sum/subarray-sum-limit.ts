function checkQueries(nums: number[], queries: number[][], limit: number): boolean[] {
  let result: boolean[];
  const prefix: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  result = queries
    .map(([i, j]) => (prefix[j] - prefix[i ? i - 1 : 0] < limit));

  return result;
}

const inputs = [1, 6, 3, 2, 7, 2];
const queries = [[0, 3], [2, 5], [2, 4]];
const limit = 13;

console.log(`Input array=[${inputs}] queries=[${queries}] limit=${limit} check queries [${checkQueries(inputs, queries, limit)}] `);
