function maxDistToClosest(seats: number[]): number {
  let maxDistance = 0;
  let emptySeatsCount = 0;

  for (let i = 0; i < seats.length; i++) {
    if (i > 0 && seats[i] != seats[i - 1] && emptySeatsCount > 0 && seats[i] === 1) {
      // console.log('seat-pos emptySeatsCount - #', i, emptySeatsCount);
      // maxDistance = Math.max(maxDistance, emptySeatsCount);
      if (i - emptySeatsCount === 0) {
        maxDistance = Math.max(maxDistance, emptySeatsCount);
      } else {
        maxDistance = Math.max(maxDistance, Math.floor(emptySeatsCount / 2) + (emptySeatsCount % 2 ? 1 : 0 ));
      }
      emptySeatsCount = 0;
    }

    if (seats[i] === 0) {
      emptySeatsCount++;
    }
  }

  if (emptySeatsCount > 0) {
    // console.log('seat-pos emptySeatsCount end', seats.length - 1, emptySeatsCount);
    maxDistance = Math.max(maxDistance, emptySeatsCount);
  }

  return maxDistance;
}

// console.log('[1,0,0,0,1,0,1] === 2', maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
// console.log('[1,0,0,0] === 3', maxDistToClosest([1, 0, 0, 0]));
// console.log('[0,0,0,1] === 3', maxDistToClosest([0, 0, 0, 1]));
// console.log('[0,1,0,1,0] === 1', maxDistToClosest([0, 1, 0, 1, 0]));
// console.log('[1,1,0,0,0,1,0] === 2', maxDistToClosest([1, 1, 0, 0, 0, 1, 0]));
// console.log('[1,1,0,1,0,0,0,1,0,0,1,1] === 2', maxDistToClosest([1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1]));
// console.log('[1,0,0,0,0,0,1] === 3', maxDistToClosest([1, 0, 0, 0, 0, 0, 1]));
console.log('[1,0,0,1] === 1', maxDistToClosest([1, 0, 0, 1]));
