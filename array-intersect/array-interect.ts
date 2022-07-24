const array1 = [2, 4, 3];
const array2 = [7, 8, 9, 10, 4, 2, 3 , 3];

console.log('@@@', intersect(array1, array2));

function intersect(a: number[], b: number[]): number[] {
  const map: { [key: number]: number } = {};
  const result = [];

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const value1 = a[i];
    const value2 = b[i];

    if (value1) {
      map[value1] = (map[value1] ?? 0) + 1;
      if (map[value1] === 2) {
        result.push(value1);
      }
    }

    if (value2) {
      map[value2] = (map[value2] ?? 0) + 1;
      if (map[value2] === 2) {
        result.push(value2);
      }
    }

  }
  return result;
}
