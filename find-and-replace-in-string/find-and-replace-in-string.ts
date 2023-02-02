function getSubstring(original: string, search: string): number[] {
  const result: number[] = [];
  let idx = original.indexOf(search);

  while (idx >= 0) {
    result.push(idx);
    idx = original.indexOf(search, idx + 1);
  }

  return result
}

function findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
  let result = s;
  const replacement: any = [];

  sources.forEach((v, idx) => {
    const positions = getSubstring(s, v);

    positions.filter(index => indices[idx] === index).forEach(indexOrigin => {
      if (indexOrigin >= 0 && indices[idx] === indexOrigin) {
        replacement.push(
          {
            start: indexOrigin,
            end: indexOrigin + v.length - 1,
            origin: v,
            target: targets[idx],
          },
        );
      }
    });

  });

  // console.log('@@@ b', s, replacement);

  replacement.sort((a: any, b: any) => {
    return a.start - b.start;
  });

  // console.log('@@@ a', s, replacement);

  replacement.forEach((e: any, idx: number) => {
    const part1 = result.slice(0, e.start);
    const part2 = result.slice(e.end + 1);

    // console.log('start end', e.start, e.end);
    //
    // console.log('1', part1);
    // console.log('2', part2);
    // console.log('3', targets);

    result = part1 + e.target + part2;
    // console.log('4', result);

    for (let i = idx + 1; i < replacement.length; i++) {
      const size = replacement[idx].target.length - replacement[idx].origin.length;
      // console.log('start end size', replacement[i].start, replacement[i].end, size);
      replacement[i].start = replacement[i].start + size;
      replacement[i].end = replacement[i].end + size;
    }
    // console.log('####', replacement);

  });

  // console.log(replacement);

  return result;
}

// console.log(
//   's = "abcd", indices = [0, 2], sources = ["ab","ec"], targets = ["eee","ffff"] === eeecd',
//   findReplaceString('abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff']),
// );
//
// console.log(
//   's = "abcd", indices = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"] === eeebffff',
//   findReplaceString('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff']),
// );
//
// console.log(
//   's = "vmokgggqzp", indices = [3,5,1], sources = ["kg","ggq","mo"], targets = ["s","so","bfr"] === vbfrssozp',
//   findReplaceString('vmokgggqzp', [3, 5, 1], ['kg', 'ggq', 'mo'], ['s', 'so', 'bfr']),
// );

console.log(
  's = "wreorttvosuidhrxvmvo", indices = [14,12,10,5,0,18], sources = ["rxv","dh","ui","ttv","wreor","vo"], targets = ["frs","c","ql","qpir","gwbeve","n"] === gwbeveqpirosqlcfrsmn',
  findReplaceString(
    'wreorttvosuidhrxvmvo',
    [14, 12, 10, 5, 0, 18],
    ["rxv", "dh", "ui", "ttv", "wreor", "vo"],
    ["frs", "c", "ql", "qpir", "gwbeve", "n"],
  ),
);
