function getGroups(s: string): { [key: string]: string } {
  const groups: any = {};

  let lastGroup = '';

  for (let i = 0; i < s.length; i++) {
    if (!lastGroup.includes(s[i])) {
      if (lastGroup.length >= 3) {
        groups[lastGroup[0]] = lastGroup;
      }
      lastGroup = s[i];
    } else {
      lastGroup += s[i];
    }
  }

  if (lastGroup.length >= 3) {
    groups[lastGroup[0]] = lastGroup;
  }

  return groups;
}

function expressiveWords(s: string, words: string[]): number {
  let count = 0;
  let mainGroups: any;

  mainGroups = getGroups(s);

  for (let i = 0; i < words.length; i++) {
    let group = '';
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (!group.includes(word[j])) {
        if (mainGroups[group[0]] && group.length < mainGroups[group[0]].length) {
          const part1 = word.slice(0, j - group.length);
          const part2 = word.slice(j);
          word = part1 + mainGroups[group[0]] + part2;
          j += mainGroups[group[0]].length - group.length;
        }
        group = word[j];
      } else {
        group += word[j];
      }
    }

    if (mainGroups[group[0]] && group.length < mainGroups[group[0]].length) {
      const part1 = word.slice(0, word.length - group.length);
      word = part1 + mainGroups[group[0]];
    }

    if (word === s) {
      count++;
    }
  }

  return count;
}

console.log(
  's = "heeellooo", words = ["hello", "hi", "helo"]',
  expressiveWords('heeellooo', ['hello', 'hi', 'helo']),
);

console.log(
  's = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]',
  expressiveWords('zzzzzyyyyy', ['zzyy', 'zy', 'zyy']),
);

console.log(
  's = "aaa", words = ["aaaa"]',
  expressiveWords('aaa', ['aaaa']),
);
