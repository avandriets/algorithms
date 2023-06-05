function sumOfTwo(num: number, numbers: number[]): number[][] {
  const result: number[][] = [];
  const map: any = {};

  for (let i = 0; i < numbers.length; i++) {
    if (map[numbers[i]]) {
      result.push([numbers[i], map[numbers[i]]]);
    }
    map[num - numbers[i]] = numbers[i];
  }

  return result;
}

console.log('### input= [0, 2, 4, 6, 2, 8, 10] num=12', sumOfTwo(12, [0, 2, 4, 6, 2, 8, 10]));
