function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;
  digits[digits.length - 1] = digits[digits.length - 1] + 1;

  while (digits.length - i >= 0) {
    if (digits[i] > 9) {
      let reminder = digits[i] % 10;
      let result = Math.floor(digits[i]/ 10);

      digits[i] = reminder;

      if (i === 0) {
        digits.unshift(result);
      } else {
        digits[i - 1] = digits[i - 1] + result;
      }
    } else {
      break;
    }
    i--;
  }

  return digits;
}

console.log(plusOne([9]));
