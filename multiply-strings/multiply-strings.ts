
function add(num: string, count: number): number[] {
  const original = Array.from(num).map(i => +i);
  const result = [];

  for (let j = original.length - 1; j >= 0; j--) {
    const sum: any = original[j] * count;

    if (result.length > 0 && result[0] > 9) {
      const w: any = result.shift();
      const rest = w % 10;
      const rest1 = (w - rest) / 10;
      result.unshift(rest);
      result.unshift(sum + rest1);
    } else {
      result.unshift(sum);
    }

  }
  const res = result.shift();

  return [...Array.from('' + res).map(i => +i), ...result];
}

function multiply(num1: string, num2: string): string {

  if (num2 === '0') {
    return '0';
  }

  let a = 0, b = 0;
  const sum: any = [];
  const numOne = [];
  const numTwo = [];

  const result = [];

  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    if (i < num1.length) {
      a = (a * 10) + +num1[i];
      numOne.push(+num1[i])
    }

    if (i < num2.length) {
      b = (b * 10) + +num2[i];
      numTwo.push(+num2[i])
    }
  }

  let max = 0;
  for (let i = num2.length - 1, j = 1; i >= 0; i--, j*=10) {
    const arr = add('' + a, numTwo[i] * j);
    max = Math.max(max, arr.length);
    sum.push(arr);
  }

  for (let j = 0; j < max; j++) {
    let columnSum = 0;

    for (let i = 0; i < sum.length; i++) {
      if (sum[i].length > j) {
        columnSum += +sum[i][sum[i].length - j - 1];
      }
    }

    if (result.length > 0 && result[0] > 9) {
      const w: any = result.shift();
      const rest = w % 10;
      const rest1 = (w - rest) / 10;
      result.unshift(rest);
      result.unshift(columnSum + rest1);
    } else {
      result.unshift(columnSum);
    }
  }

  return result.join('');
}
// console.log('num1 = "123", num2 = "456" 56088 === ', multiply('123', '456'));
// console.log('num1 = "123456789", num2 = "987654321" 121932631112635269 === ', multiply('123456789', '987654321'));
// console.log('num1 = "498828660196", num2 = "840477629533" 419254329864656431168468 === ', multiply('498828660196', '840477629533'));
console.log('num1 = "9333852702227987", num2 = "85731737104263" 800207406037324579815815608581 === ', multiply('9333852702227987', '85731737104263'));
