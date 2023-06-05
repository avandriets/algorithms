const num = 0;

console.log(`factorial ${num} `, factorial(num));
console.log(`factorial ${num} `, factorialLoop(num));

function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial can be only for positive numbers.');
  }
  return !n ? 1 : n * factorial(n - 1);
}

function factorialLoop(n: number): number {
  if (n < 0) {
    throw new Error('Factorial can be only for positive numbers.');
  }
  let f = 1;
  for (let i = n; i > 0; i--) {
    f *= i;
  }

  return f;
}
