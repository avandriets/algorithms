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

const result: TreeNode[] = [];

console.log('## DFS recursion ##');

console.log(search(a).toString());

function search(element: TreeNode | null): TreeNode[] {
  if (!element) {
    return [];
  }

  return [element, ...search(element.left), ...search(element.right)]
}
