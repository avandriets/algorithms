function reverseString(str: string[]): string[] {
  let left = 0, right = str.length - 1;

  while (left < right) {
    const b = str[left];
    str[left] = str[right];
    str[right] = b;

    left++;
    right--;
  }

  return str;
}

const source = ['h', 'e', 'l', 'l', 'o'];
console.log(`Reverse array ${source} is ${reverseString(source)}`);
