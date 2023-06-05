import {Graph} from "../utils/graph.interface";

// const edges: string[][] = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v'],
// ];
const edges: string[][] = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f'],
];

const visited: { [key: string]: string } = {};

console.log('@@@', buildGraph(edges));
console.log('###', shortPath(buildGraph(edges), 'w', 'z', visited));

function buildGraph(es: string[][]): Graph<string> {
  const graph: Graph<string> = {};

  for (const edge of es) {
    const [a, b] = edge;
    graph[a] = [...graph[a] ?? [], b] ?? [b];
    graph[b] = [...graph[b] ?? [], a] ?? [a];
  }

  return graph;
}

function shortPath(g: Graph<string>, root: string, dest: string, v: { [key: string]: string }): number {
  const queue = [{node: root, dist: 0}];
  v[root] = root;

  while (queue.length > 0) {
    const {node, dist} = queue.shift() ?? {node: '', dist: 0};

    if (node === dest) {
      return dist;
    }

    for (const element of g[node] ?? []) {
      if (!v[element]) {
        v[element] = element;
        queue.push({node: element, dist: dist + 1});
      }
    }
  }

  return -1;
}
