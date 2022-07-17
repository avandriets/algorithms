const array = [7, 2, 3, 4, 5, 6, 1, 51, 33, 21, 18, 25, 11];

let interval = Math.floor(array.length / 1.24);
let oneMore = true;

while (interval > 0 || oneMore) {
  if (oneMore && !interval) {
    oneMore = false;
    interval = 1;
  }

  for (let i = 0; i + interval < array.length; i++) {
    if (array[i] > array[i + interval]) {
      const m = array[i + interval];
      array[i + interval] = array[i];
      array[i] = m;
    }
  }
  interval = Math.floor(interval / 1.3);
}

console.log(array.toString());

