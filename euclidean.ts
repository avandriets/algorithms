console.log('###', gcd(234, 134));

function gcd(a: number, b: number):  number {
  if (a === 0)
    return Math.abs(b);

  if (b === 0)
    return Math.abs(a);

  while (true) {
    if ((a %= b) === 0)
      return Math.abs(b);
    else if ((b %= a) === 0)
      return Math.abs(a);
  }

}
