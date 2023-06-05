function possibleVariants(nums: string[], begin: number, end: number): number[] {
  const result: { [key: string]: number; } = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const num = nums[i] + nums[j];
      if (parseInt(num) <= end && parseInt(num) >= begin) {
        result[parseInt(num)] = parseInt(num);
      }
    }
  }

  return Object.values(result).sort((a, b) => a - b);
}

function numToString(num: number): string {
  return num === 0 ? '00' : `${num}`.padStart(2, '0');
}

function nextClosestTime(time: string): string {
  let result = '';
  let [hour, minutes] = time.split(':');
  const availableSymbols = time.replace(':', '');

  const availableHours = possibleVariants(Array.from(availableSymbols), 0, 23);
  const availableMinutes = possibleVariants(Array.from(availableSymbols), 0, 59);

  // console.log('hours', availableHours);
  // console.log('minutes', availableMinutes);

  const hP = availableHours.indexOf(parseInt(hour));
  const mP = availableMinutes.indexOf(parseInt(minutes))

  const rightH = availableHours[hP + 1];
  const rightM = availableMinutes[mP + 1];

  if (rightH === undefined && rightM === undefined) {
    result = numToString(availableHours[0]) + ':' + numToString(availableMinutes[0]);
  } else {
    if (availableMinutes[mP + 1]) {
      result = numToString(availableHours[hP]) + ':' + numToString(availableMinutes[mP + 1]);
    } else {
      result = numToString(availableHours[hP + 1]) + ':' + numToString(availableMinutes[0]);
    }
  }

  return result;
}

console.log('19:39===', nextClosestTime('19:34'));
console.log('22:22===', nextClosestTime('23:59'));
console.log('02:44===', nextClosestTime('02:42'));
console.log('15:11===', nextClosestTime('13:55'));
console.log('22:00===', nextClosestTime('20:48'));
console.log('22:00===', nextClosestTime('20:56'));
console.log('22:22===', nextClosestTime('23:49'));
