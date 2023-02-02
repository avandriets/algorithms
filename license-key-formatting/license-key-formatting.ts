function licenseKeyFormatting(s: string, k: number): string {
  let output = '';
  let groupCounter = 0;

  for (let i = s.length - 1; i >= 0; i--) {

    if (s[i] !== '-') {
      output = s[i].toUpperCase() + output;
      groupCounter++;
    }

    if (groupCounter === k && i > 0 && s[i - 1] !== '-') {
      output = '-' + output;
      groupCounter = 0;
    }
  }

  return output;
}

// console.log('5F3Z-2e-9-w | 4 => 5F3Z-2E9W === ', licenseKeyFormatting('5F3Z-2e-9-w', 4));
// console.log('2-5g-3-J | 2 => 2-5G-3J === ', licenseKeyFormatting('2-5g-3-J', 2));
console.log('--a-a-a-a-- | 2 => AA-AA === ', licenseKeyFormatting('--a-a-a-a--', 2));
