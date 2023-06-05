function isPalindrome(str: string): boolean {
  let left = 0, right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left ++;
    right --;
  }

  return true;
}

const source = 'ada';
console.log(`The string ${source} is palindrome ${isPalindrome(source)}`);
