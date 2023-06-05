function getDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
}

function kClosest(points: number[][], k: number): number[][] {
  const result: any [] = [];

  points.forEach(point => {
    result.push({
      dist: getDistance(point[0], point[1], 0, 0),
      point,
    });
  });

  return result.sort((a, b) => a.dist - b.dist)
    .filter((e, idx) => idx < k)
    .reduce((acc, c) => {
      acc.push(c.point);
      return acc;
    }, []);
}

console.log(
  'points = [[3,3],[5,-1],[-2,4]] -> [[3,3],[-2,4]], k = 2',
  kClosest([[3, 3], [5, -1], [-2, 4]], 2),
);
