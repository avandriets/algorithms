function twoSum(num: number[], target: number): boolean {
  let left = 0, right = num.length - 1;

  while (left < right) {
    if (num[left] + num[right] === target) {
      return true;
    } else if (num[left] + num[right] < target) {
      left ++;
    } else if (num[left] + num[right] > target) {
      right --;
    }

  }

  return false;
}

const source = [1, 2, 4, 6, 8, 9, 14, 15];
const target = 13;

console.log(`The array ${source} has pairs of number that sum is equal ${target}, ${twoSum(source, target)}`);
