function lengthOfLongestSubstringTwoDistinct(s: string): number {
  let uc: string[] = [];
  let lastChangePositin = 0;
  let suqsesionLength = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length;) {
    if (uc.includes(s[i])) {
      suqsesionLength++;
      if (i > 0 && s[i] !== s[i - 1]) {
        lastChangePositin = i;
      }

    } else {
      if (uc.length < 2) {
        suqsesionLength++;
        uc.push(s[i]);
        if (i > 0 && s[i] !== s[i - 1]) {
          lastChangePositin = i;
        }
      } else {
        uc = [];
        maxLength = Math.max(maxLength, suqsesionLength);
        i = lastChangePositin;
        suqsesionLength = 0;
        continue;
      }
    }
    i++;
  }

  return Math.max(maxLength, suqsesionLength);
}

console.log('5==', lengthOfLongestSubstringTwoDistinct('ccaabbb'));
console.log('3==', lengthOfLongestSubstringTwoDistinct('eceba'));
