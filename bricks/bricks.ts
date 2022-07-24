const wallOfBricks: number[][] = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
];

console.log('@@@', getMin(wallOfBricks));

function getMin(src: number[][]): number {
  const gaps: { [key: number]: number } = {};

  for (let i = 0; i < wallOfBricks.length; i++) {
    wallOfBricks[i].forEach(value => {
      gaps[value] = (gaps[value] ?? 0) + value;
    });
  }

  const min = Object.values(gaps).reduce((acc, c) => {
    if (acc === undefined) {
      acc = c;
    } else {
      acc = Math.min(acc, c);
    }
    return acc;
  })

  return min;
}
