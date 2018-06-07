const zeroMatrix = (grid) => {
  const zeroRow = {};
  const zeroCol = {};

  grid.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      if (col === 0) {
        zeroRow[rowIdx] = true;
        zeroCol[colIdx] = true;
      }
    })
  })

  grid.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      if (zeroRow[rowIdx] || zeroCol[colIdx]) {
        grid[rowIdx][colIdx] = 0;
      }
    })
  })

  return grid;
};

const makeGrid = (length) => {
  const grid = [];
  for (let i = 0; i < length; i ++) {
    grid.push([]);
    for (let j = 0; j < length; j ++) {
      grid[i].push(1);
    }
  }

  return grid;
};

let grid = makeGrid(5);
grid[0][1] = 0;
console.log('grid', grid);
let sliced = grid.map(el => el.slice());
let zeroed = zeroMatrix(sliced);
console.log('zeroed', zeroed);
