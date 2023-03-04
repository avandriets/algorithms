function allowedCoordinates(x: number, y: number, grid: string[][], visited: Set<string>): boolean {
  if (visited.has(`${x}-${y}`)) {
    return false;
  }

  visited.add(`${x}-${y}`);
  return !(x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1);
}

function explore(x: number, y: number, grid: string[][], visited: Set<string>): number {
  let count = 0;

  if (!allowedCoordinates(x, y, grid, visited) || grid[x][y] === '0') {
    return count;
  }
  count++;

  const left = explore(x - 1, y, grid, visited);
  const right = explore(x + 1, y, grid, visited);
  const top = explore(x, y + 1, grid, visited);
  const bottom = explore(x, y - 1, grid, visited);

  return left + right + top + bottom + count;
}

function numIslands(grid: string[][]): number {
  const visited = new Set<string>();
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (explore(i, j, grid, visited)) {
        islands++;
      }
    }
  }

  return islands;
}

const isLandsMap = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

console.log('output === 1', numIslands(isLandsMap));
