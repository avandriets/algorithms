const str = '[{[]()}{[][]}]';

const openBraces = '[{(';
const closeBraces = ']})';

console.log('@@@', checkBraces(str));

function checkBraces(src: string): string[] {
  const stack = [src[0]];

  for (let i = 1; i < str.length; i++) {
    if (openBraces.includes(stack[stack.length - 1]) && closeBraces.includes(str[i])) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack;
}
