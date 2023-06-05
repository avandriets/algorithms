const graph: { [key: string]: string[] } = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

console.log('breadth first algorithm');
breadthFirst(graph, 'a');

console.log('depth first algorithm');
depthFirst(graph, 'a');

function breadthFirst(grath: { [key: string]: string[] }, root: string) {
  const queue: string[] = [root];

  while (queue.length > 0) {
    const current: string = queue.shift() as string;

    queue.push(...grath[current]);
    console.log(current);
  }
}

function depthFirst(grath: { [key: string]: string[] }, root: string) {
  const stack: string[] = [root];

  while (stack.length > 0) {
    const current: string = stack.pop() as string;

    stack.push(...grath[current]);
    console.log(current);
  }
}
