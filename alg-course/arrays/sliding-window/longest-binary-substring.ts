function longestBinarySubstring(str: string): number {
  let maxSubstring = 0, currLength = 0;
  let left = 0, right = 0, wasZero = 0;

  for (; right < str.length; right++) {
    currLength++;

    if (str[right] === '0') {
      wasZero++;
    }

    while (wasZero > 1) {
      if (str[left] === '0') {
        wasZero--;
      }
      currLength--;
      left++;
    }

    maxSubstring = Math.max(maxSubstring, currLength);
  }

  return maxSubstring;
}

const initialString = '11011001111111001111';

console.log(`Longest binary substring of "${initialString}" is ${longestBinarySubstring(initialString)}`);
