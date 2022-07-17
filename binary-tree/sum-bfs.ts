import {TreeNode} from "../utils/tree-node.class";

const a = new TreeNode('a', 1);
const b = new TreeNode('b', 2);
const c = new TreeNode('c', 3);
const d = new TreeNode('d', 4);
const e = new TreeNode('e', 5);
const f = new TreeNode('f', 6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const queue = [a];
const result = [];

let sum = 0;

console.log('## BFS ##');

while (queue.length > 0) {
  const last = queue.shift();
  sum += last?.value ?? 0;

  if (last?.left) {
    queue.push(last.left);
  }
  if (last?.right) {
    queue.push(last.right);
  }

  result.push(last);
  console.log(result.toString());
}

console.log(result.toString());
console.log('sum:', sum);
