const str = 'а роза упала на лапу азора';

console.log(`string "${str}" palindrome? ${isPalindrome(str.toLowerCase().replace(/\s/g, '')) ? 'yes' : 'no'}`);

function isPalindrome(s: string): boolean {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
}
