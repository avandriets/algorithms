interface Graph <T>{
  [key: string]: T[];
}

const graph: Graph<string> = {
  '0': ['8', '1', '5'],
  '1': ['0'],
  '5': ['0', '8'],
  '8': ['0', '5'],
  '2': ['3', '4'],
  '3': ['2', '4'],
  '4': ['3', '2'],
};

const visited: { [key: string]: string } = {};

console.log('max component', largestComponent(graph, visited));

function largestComponent(g: Graph<string>, v: { [key: string]: string }): number {
  let max = 0;

  Object.keys(g).forEach(n => {
    max = Math.max(max, getComponentSize(g, n, v));
  });

  return max;
}

function getComponentSize(g: Graph<string>, root: string, v: { [key: string]: string }): number {
  if (v[root]) {
    return 0;
  }

  v[root] = root;

  let count = 1;
  for (const node of g[root]) {
    count += getComponentSize(g, node, v);
  }

  return count;
}
