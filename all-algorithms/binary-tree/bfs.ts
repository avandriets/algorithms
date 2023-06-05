import {TreeNode} from "../utils/tree-node.class";

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const queue = [a];
const result = [];

console.log('## BFS ##');

while (queue.length > 0) {
  const last = queue.shift();

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
