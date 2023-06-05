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

let stack = [a];
const result = [];

console.log('## DFS ##');

while (stack.length > 0) {
  const current = stack.pop();

  if (current?.right) {
    stack.push(current.right);
  }

  if (current?.left) {
    stack.push(current.left);
  }

  result.push(current);
}

console.log(result.toString());
