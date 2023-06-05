// function lengthOfLongestSubstring(s: string): number {
//   let max = 0;
//
//   for (let i = 0; i < s.length; i++) {
//     let str = '';
//     let canMove = true;
//
//     let j = i;
//     while (canMove && j < s.length) {
//       if (str.indexOf(s[j]) === -1) {
//         str += s[j];
//       } else {
//         canMove = false;
//       }
//       j++;
//     }
//
//     max = Math.max(str.length, max);
//   }
//
//   return max;
// }

function lengthOfLongestSubstring(s: string): number {
  let str = new Set();
  let canMove = true;

  if (s.length === 0) {
    return 0;
  }

  let j = 0;
  while (canMove && j < s.length) {
    if (!str.has(s[j])) {
      str.add(s[j]);
    } else {
      canMove = false;
    }
    j++;
  }

  return Math.max(str.size, lengthOfLongestSubstring(s.slice(1)));
}


// console.log('bbbbb 1 === ', lengthOfLongestSubstring('bbbbb'));
// console.log('abcabcbb 1 === ', lengthOfLongestSubstring('abcabcbb'));
// console.log('pwwkew 3 === ', lengthOfLongestSubstring('pwwkew'));
// console.log('qwertyupbwwkew 9 === ', lengthOfLongestSubstring('qwertyupbwwkew'));
console.log('dvdf 3 === ', lengthOfLongestSubstring('dvdf'));
