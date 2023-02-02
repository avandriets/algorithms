function sortThreeNumbers(a: number, b: number, c: number): number[] {
  let first: number = a;
  let second: number = b;
  let third: number = c;

  let buffer;

  if (first > third) {
    buffer = third;
    third = first;
    first = buffer;
  }

  if (first > second) {
    buffer = second;
    second = first;
    first = buffer;
  }

  if (second > third) {
    buffer = third;
    third = second;
    second = buffer;
  }

  return [first, second, third];
}

function threeSum(nums: number[]): number[][] {
  const threeSumHash: any = {};

  nums.forEach((num, idx) => {
    const twoSumHash: any = {};

    nums.filter((e, index) => index !== idx)
      .forEach(e => {
      if (twoSumHash[e] !== undefined) {
        const res = sortThreeNumbers(num, e, twoSumHash[e]);
        threeSumHash[res.toString()] = res;
      }

      twoSumHash[(-1) * num - e] = e;
    });
  });

  return Object.values(threeSumHash);
}

console.log('[0,1,1] [] === ', threeSum([0,1,1]));
console.log('[0,0,0] [[0,0,0]] === ', threeSum([0,0,0]));
console.log('[-1,0,1,2,-1,-4] [[-1,-1,2],[-1,0,1]] === ', threeSum([-1, 0, 1, 2, -1, -4]));

// переделать по методу с двумя указателями
// двигаемся с начала до конца а хвост массива итерируем с двух краев
