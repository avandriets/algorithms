function removeBackSpace(s: string): string {
  const pos = s.indexOf('#');
  let result = '';

  if (pos < 0) {
    return s;
  }

  if (s.length === 1) {
    return result;
  }

  const part1 = s.slice(0, pos - 1);
  const part2 = s.slice(pos + 1);

  if (pos > 0) {
    result = part1 + part2;
  } else {
    result = part2;
  }

  return removeBackSpace(result);
}

function backspaceCompare(s: string, t: string): boolean {
  return removeBackSpace(s) === removeBackSpace(t);
}

console.log('s = "ab##", t = "c#d#" === true', backspaceCompare('ab##', 'c#d#'));
console.log('s = "a##c", t = "#a#c" === true', backspaceCompare('a##c', '#a#c'));
