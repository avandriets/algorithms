const graph: { [key: string]: string[] } = {
  i: ['j', 'k'],
  j: ['i'],
  k: ['i', 'm', 'l'],
  m: ['k'],
  l: ['k'],
  o: ['n'],
  n: ['o'],
};

const visited: { [key: string]: string } = {};

console.log('###', hasPath(graph, 'j', 'm'));

function hasPath(graph: { [key: string]: string[] }, src: string, dist: string): boolean {
  if (src === dist) {
    return true;
  }

  if (src in visited) {
    return false;
  }

  visited[src] = src;

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dist)) {
      return true;
    }
  }

  return false;
}
