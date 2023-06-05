function buildTree(grid: number[][]): any {
  const tree: any = {};
  for (let i = 0; i < grid.length; i++) {
    tree[grid[i][1]] = tree[grid[i][1]] ? [grid[i][0], ...tree[grid[i][1]]] : [grid[i][0]];
  }
  return tree;
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const tree = buildTree(prerequisites);
  const queue: any = [prerequisites[0][1]];
  const result = [];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    result.push(node);

    if (tree[node]) {
      queue.push(...tree[node]);
    }
  }

  return result;
}

console.log(
  'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
  findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])
);
