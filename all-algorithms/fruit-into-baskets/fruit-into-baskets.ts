function totalFruit(fruits: number[]): number {
  let max = 0;
  const groups: number[] = [];

  for (let index = 0; index < fruits.length;) {
    let count = 0;
    const trees: { [key: number]: number } = {};

    for (let i = index; i < fruits.length; i++) {
      if (i === 0 || (fruits[i-1] !== fruits[i])) {
        groups.push(i);
      }

      if ((!trees[fruits[i]] && Object.keys(trees).length < 2) || (trees[fruits[i]] !== null && trees[fruits[i]] !== undefined)) {
        trees[fruits[i]] = (trees[fruits[i]] ?? 0) + 1;
        count++;
      } else {
        index = groups[groups.length - 2];
        break;
      }

      if (i === fruits.length - 1) {
        return Math.max(max, count);
      }

    }
    max = Math.max(max, count);
  }

  return max;
}

console.log('[1,2,1] 3 === ', totalFruit([1, 2, 1]));
console.log('[0,1,2,2] 3 === ', totalFruit([0, 1, 2, 2]));
console.log('[1,2,3,2,2] 4 === ', totalFruit([1, 2, 3, 2, 2]));
console.log('[0,1,6,6,4,4,6] 5 === ', totalFruit([0,1,6,6,4,4,6]));
