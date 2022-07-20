const graph: { [key: string]: string[] } = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
  n: [],
};

console.log('has path', hasPath(graph, 'f', 'k'));

function hasPath(graph: { [key: string]: string[] }, src: string, dist: string ): boolean {
  if (src === dist) {
    return true;
  }

  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift() ?? '';

    if (current === dist) {
      return true;
    }

    queue.push(...graph[current]);
  }

  return false;
}

// function hasPath(graph: { [key: string]: string[] }, src: string, dest: string): boolean {
//
//   if (src === dest) {
//     return true;
//   }
//
//   for (const neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dest)) {
//       return true;
//     }
//   }
//
//   return false;
// }
