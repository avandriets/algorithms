// Find the longest gap with 00000 in binary number

console.log(solution(1376796946));
console.log((1376796946).toString(2))

// console.log(solution(1610612737));
// console.log(solution(5));
// console.log(solution(9));

function solution (N: number): number {
  let num = N;
  let rest = num % 2;
  let binaryString = rest.toString();

  let maxGapLength = 0;
  let maxOfInterval = 0;

  let allowToCount = !!rest;

  for (; num > 1; ) {
    if (!rest && allowToCount) {
      maxOfInterval++;
    } else if (rest) {
      if (maxOfInterval > maxGapLength) {
        maxGapLength = maxOfInterval;
      }
      maxOfInterval = 0;
    }

    num = Math.floor(num / 2);
    rest = num % 2;
    binaryString =  `${rest}${binaryString}`;

    allowToCount = allowToCount || !!rest;
  }

  if (!rest && allowToCount) {
    maxOfInterval++;
  } else if (rest) {
    if (maxOfInterval > maxGapLength) {
      maxGapLength = maxOfInterval;
    }
  }

  return maxGapLength;
}
