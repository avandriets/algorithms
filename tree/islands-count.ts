const islands = [
  ['w', 'w', 'w', 'w', 'w', 'w'],
  ['w', 'l', 'l', 'w', 'w', 'w'],
  ['l', 'w', 'l', 'l', 'w', 'w'],
  ['w', 'w', 'l', 'w', 'w', 'w'],
  ['w', 'w', 'w', 'w', 'l', 'l'],
  ['l', 'w', 'w', 'w', 'w', 'w'],
];

const visited: { [key: string]: string } = {};

const c = islandsCount(islands, visited);

console.log('islands count', c);

function islandsCount(islandsMap: string[][], v: { [key: string]: string }): { count: number, max: number } {
  let count = 0;
  let max = 0;

  for (let i = 0; i < islandsMap.length; i++) {
    for (let j = 0; j < islandsMap[0].length; j++) {
      if (islandsMap[i][j] === 'l') {
        const islandVolume = explore(islandsMap, i, j, v);
        max = Math.max(islandVolume, max);
        count += islandVolume ? 1 : 0;
      }
    }
  }

  return {count, max};
}

function explore(islandsMap: string[][], row: number, column: number, v: { [key: string]: string }): number {
  let count = 0;
  if (v[`${row}-${column}`] ||
    !(row >= 0 && row < islandsMap.length && column >= 0 && column < islandsMap[0].length)
  ) {
    return count;
  }

  if (islandsMap[row][column] === 'l') {
    v[`${row}-${column}`] = `${row}-${column}`;

    count += 1;
    count += explore(islandsMap, row - 1, column, v);
    count += explore(islandsMap, row + 1, column, v);
    count += explore(islandsMap, row, column - 1, v);
    count += explore(islandsMap, row, column + 1, v);

    return count;
  }

  return count;
}
