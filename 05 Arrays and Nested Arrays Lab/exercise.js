function solve(matrix) {
    let pairs = 0;

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if ((c + 1 < matrix[r].length) && (matrix[r][c] === matrix[r][c + 1])) {
                pairs++;
            }
            if ((r + 1 < matrix.length) && (matrix[r][c] === matrix[r + 1][c])) {
                pairs++;
            }
        }
    }
    console.log(pairs);
}
solve([['test', 'yes', 'yo', 'ho'],
       ['well', 'done', 'yo', '6'],
       ['not', 'done', 'yet', '5']]);       