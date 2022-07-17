const array = [7, 2, 3, 4, 5, 6, 1, 51, 33, 21, 18, 25];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - i; j++) {
    if (array[j] > array[j + 1]) {
      const m = array[j + 1];
      array[j + 1] = array[j];
      array[j] = m;
    }
  }
}

console.log(array.toString());
