function minMeetingRooms(intervals: number[][]): number {
  const result: number[][][] = [];
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1] );

  // console.log(intervals);

  intervals.forEach(interval => {
    if (result.length === 0) {
      result.push([interval]);
    } else {
      let wasIntersect = false;
      for (let i = 0; i < result.length; i++) {
        let add = true;
        for (let j = 0; j < result[i].length; j++) {
          if (
            (interval[0] < result[i][j][0] &&  result[i][j][1] < interval[1])
            || (result[i][j][0] < interval[0]  && interval[1] < result[i][j][1])
            || (result[i][j][0] <= interval[0] && interval[0] < result[i][j][1])
            || (result[i][j][0] < interval[1] && interval[1] <= result[i][j][1])
            ) {
            add = false;
            break;
          }
        }
        if (add) {
          wasIntersect = true;
          result[i].push(interval);
          break;
        }
      }

      if (!wasIntersect) {
        result.push([interval]);
      }
    }
  });

  // console.log(result);

  return result.length;
}

console.log('[[0,30],[5,10],[15,20]] === 2', minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
console.log('[[7,10],[2,4]] === 1', minMeetingRooms([[7,10],[2,4]]));
console.log('[[6,15],[13,20],[6,17]] === 3', minMeetingRooms([[6,15],[13,20],[6,17]]));
console.log('[[13,15],[1,13]] === 1', minMeetingRooms([[13,15],[1,13]]));
