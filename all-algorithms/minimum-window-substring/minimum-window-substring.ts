function checkIfContains(s: string, template: string): boolean {
  console.log(s);

  for (let i = 0; i < template.length; i++) {
    if (!s.includes(template[i])) {
      return false;
    }
  }
  return true;
}

function minWindow(s: string, t: string): string {
  const minSubstring: any = {};

  if (s.length == 0 || t.length == 0) {
    return '';
  }

  if (t.length > s.length) {
    return '';
  }

  let left = 0;
  let right = s.length - 1;

  while (left < s.length) {
    if (t.includes(s[left])) {
      const str = s.slice(left);

      if (checkIfContains(str, t)) {
        minSubstring[str] = str.length;
      } else {
        break;
      }
    }
    left++;
  }

  while (right >= 0) {
    if (t.includes(s[right])) {
      const str = s.slice(0, right+1);

      if (checkIfContains(str, t)) {
        minSubstring[str] = str.length;
      } else {
        break;
      }
    }
    right--;
  }

  let minStr = '';
  let min;

  for (const key in minSubstring) {
    if (min === undefined) {
      min = minSubstring[key];
      minStr = key;
    } else if (min > minSubstring[key]) {
      min = minSubstring[key];
      minStr = key;
    }
  }

  return minStr;
}

console.log('BANC=', minWindow('ADOBECODEBANC', 'ABC'));
console.log('a=', minWindow('a', 'a'));
console.log('""=', minWindow('a', 'aa'));
console.log('a=', minWindow('ab', 'a'));
console.log('aa=', minWindow('aa', 'aa'));
console.log('b=', minWindow('abc', 'b'));
console.log('baa=', minWindow('bbaa', 'aba'));
console.log('aec=', minWindow('cabefgecdaecf', 'cae'));
