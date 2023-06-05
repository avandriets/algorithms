const array = [3, 4, 5, 6, 5, 1, 33, 65, 7, 8, 98, 99, 8, 90];

const sortedArray = array.sort((a, b) => a - b);
const value = 3;

let left = 0;
let right = sortedArray.length - 1;
let middle = 0;

while(value !== sortedArray[middle]) {
  middle = Math.ceil((right + left) / 2);

  if (sortedArray[middle] > value) {
    right = middle;
  } else if (sortedArray[middle] < value) {
    left = middle;
  }
}

console.log(`position:${middle} value:${sortedArray[middle]}`);
