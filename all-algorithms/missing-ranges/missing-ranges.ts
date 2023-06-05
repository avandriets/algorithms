function prepareInterval(start: number, finish: number): string {
  if (start === finish) {
    return `${start}`;
  } else if (start < finish) {
    return `${start}->${finish}`;
  } else {
    return '';
  }
}

function findMissingRanges(nums: number[], lower: number, upper: number): string[] {
  if (!nums.length) {
    if (lower === upper) {
      return [`${lower}`];
    } else {
      return [`${lower}->${upper}`];
    }
  }

  const range = [...nums];
  const result: string[] = [];

  for (let i = 0; i < range.length - 1; i++) {
    const distance = range[i + 1] - range[i] - 1;

    if (distance > 0) {
      result.push(prepareInterval(range[i] + 1, range[i + 1] - 1));
    }
  }

  const firstInterval = prepareInterval(lower, nums[0] - 1);
  const lastInterval = prepareInterval(nums[nums.length - 1] + 1, upper);

  if (firstInterval) {
    result.unshift(firstInterval);
  }

  if (lastInterval) {
    result.push(lastInterval);
  }

  return result;
}

console.log('["2","4->49","51->74","76->99"]=', findMissingRanges([0, 1, 3, 50, 75], 0, 99));
console.log('["1"]=', findMissingRanges([], 1, 1));
console.log('["-2"]=', findMissingRanges([-1], -2, -1));
