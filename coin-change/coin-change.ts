function coinChange(coins: number[], amount: number): number {
  let solution = [];
  for (let i = 0; i < amount + 1; i++) {
    solution[i] = Infinity;
  }

  solution[0] = 0;
  for (let j = 0; j < coins.length; j++) {
    // console.log('+++ coin', coins[j]);
    for (let i = coins[j]; i < amount + 1; i++) {
      // solution[i] += solution[i - coins[j]];
      // console.log(`i=${i}, solution[i]=${solution[i]}, solution[i - coins[j]] + 1=${solution[i - coins[j]] + 1}`)
      solution[i] = Math.min(solution[i], solution[i - coins[j]] + 1);
      // console.log(solution[i]);
      // console.log('##', solution.toString());
    }
    // console.log('@@@', solution.toString());
  }
  return solution[solution.length - 1];
}

console.log('result', coinChange([1, 5, 7], 24));
