function loopShift(m: number[][]) {
  for (let layer = 0; layer < Math.floor(m.length / 2); layer++) {
    for (let i = 0; i < m.length - 1 - (layer*2); i++) {
      // console.log('---', layer, i);
      // console.log('left bottom', m[m.length - 1 - i][0]);
      // console.log('left top', m[0][i]);
      // console.log('right top', m[i][m.length - 1]);
      // console.log('right bottom', m[m.length - 1][m.length - 1 - i]);

      // console.log('---', i);
      // console.log('left bottom', m[m.length - 1 - i - layer][layer]);
      // console.log('left top', m[layer][i + layer]);
      // console.log('right top', m[i + layer][m.length - 1 - layer]);
      // console.log('right bottom', m[m.length - 1 - layer][m.length - 1 - i - layer]);

      let buffer = m[layer][i + layer];
      // left top -> left bottom
      m[layer][i + layer] = m[m.length - 1 - i - layer][layer];
      // left bottom -> right bottom
      m[m.length - 1 - i - layer][layer] = m[m.length - 1 - layer][m.length - 1 - i - layer];
      // right bottom -> right top
      m[m.length - 1 - layer][m.length - 1 - i - layer] = m[i + layer][m.length - 1 - layer];
      // right top -> left top
      m[i + layer][m.length - 1 - layer] = buffer;
    }
  }
}

function rotate(matrix: number[][]): void {
  for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
    for (let i = 0; i < matrix.length - 1 - (layer*2); i++) {
      let buffer = matrix[layer][i + layer];
      // left top -> left bottom
      matrix[layer][i + layer] = matrix[matrix.length - 1 - i - layer][layer];
      // left bottom -> right bottom
      matrix[matrix.length - 1 - i - layer][layer] = matrix[matrix.length - 1 - layer][matrix.length - 1 - i - layer];
      // right bottom -> right top
      matrix[matrix.length - 1 - layer][matrix.length - 1 - i - layer] = matrix[i + layer][matrix.length - 1 - layer];
      // right top -> left top
      matrix[i + layer][matrix.length - 1 - layer] = buffer;
    }
  }
}

// const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
// result [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// rotate(matrix);
rotate([[1,2,3],[4,5,6],[7,8,9]]);
