function isSubsequence(str: string, sub: string): boolean {
  let first = 0, second = 0;

  while (first < str.length || second < sub.length) {
    if (str[first] == sub[second]) {
      second++;
    }

    first++;
  }

  return second === sub.length;
}

const source = 'adac';
const sub = 'ac';
console.log(`The string ${sub} is subsequent of ${source} ${isSubsequence(source, sub)}`);
