const graph: { [key: string]: string[] } = {
  '0': ['8', '1', '5'],
  '1': ['0'],
  '5': ['0', '8'],
  '8': ['0', '5'],
  '2': ['3', '4'],
  '3': ['2', '4'],
  '4': ['3', '2'],
};

const visited: { [key: string]: string } = {};

console.log('connected nodes', connectedCount(graph, visited));

function connectedCount(g: { [key: string]: string[] }, v: { [key: string]: string }): number {
  let count = 0;

  Object.keys(g).forEach(n => {
    count = count + +exploreBfs(g, n, v);
  });

  return count;
}

function explore(g: { [key: string]: string[] }, root: string, v: { [key: string]: string }): boolean {
  if (v[root]) {
    return false;
  }

  v[root] = root;

  for (const node of g[root]) {
    explore(g, node, v);
  }

  return true;
}

function exploreBfs(g: { [key: string]: string[] }, root: string, v: { [key: string]: string }): boolean {
  if (v[root]) {
    return false;
  }

  const queue: string[] = [root];

  while (queue.length > 0) {
    const current: string = queue.shift() ?? '';

    if (!v[current]) {
      queue.push(...g[current]);
      v[current] = current;
    }
  }

  return true;
}
