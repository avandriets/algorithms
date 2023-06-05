function checkPalindrome(str: string): boolean {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function brutForce(s: string): string {
  let maxStr = '';
  let hash: any = {};

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const subStr = s.slice(i, j + 1);

      if (hash[subStr] === undefined) {
        hash[subStr] = checkPalindrome(subStr);
        if (hash[subStr] && maxStr.length < subStr.length) {
          maxStr = subStr;
        }
      }
    }
  }

  return maxStr;
}

function dpPalindrome(s: string): string {
  const n = s.length;
  const palindromes: boolean[][] = [];
  let x = 0, y = 0;
  let max = -Infinity;

  for (let i = 0; i < s.length; i++) {
    palindromes.push([]);
    for (let j = 0; j < s.length; j++) {
      palindromes[i].push();
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j <= n - 1; j++) {
      if (i == j) {
        palindromes[i][j] = true;
      } else if (s[i] == s[j]) {
        if (j - i == 1) {
          palindromes[i][j] = true;
        } else {
          palindromes[i][j] = palindromes[i + 1][j - 1];
        }
      }

      if (palindromes[i][j] && j - i >= max) {
        max = j - i;
        x = i;
        y = j;
      }
    }
  }

  return s.substr(x, y - x + 1);
}

function longestPalindrome(s: string): string {
  const palindromes: string[][] =
    Array.from(Array(s.length), () => Array(s.length).fill(''));
  let maxStr = '';

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j <= s.length - 1; j++) {
      const str = s.slice(i, j + 1);
      if (i == j) {
        palindromes[i][j] = str;
      } else if (s[i] === s[j]) {
        palindromes[i][j] = j - i === 1
          ? str
          : palindromes[i + 1][j - 1] ? str : '';
      }

      maxStr = palindromes[i][j]?.length >= maxStr.length ? palindromes[i][j] : maxStr;
    }
  }
  return maxStr;
}

console.log('str = "babad" output = "bab" ===', longestPalindrome('babad'));
console.log('str = "aabkaa" output = "aa" ===', longestPalindrome('aabkaa'));
console.log('str = "ABACCBA" output = "ABA" ===', longestPalindrome('ABACCBA'));
console.log('str = "babab" output = "bab" ===', longestPalindrome('babab'));
