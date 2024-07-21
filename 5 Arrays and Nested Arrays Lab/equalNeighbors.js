// function solve(matrix) {

//     const rowSize = matrix[0].length;
//     let counter = 0;

//     for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
//         for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
//             if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
//                 counter++;
//             }
//         }
//     }

//     for (let colIndex = 0; colIndex < rowSize; colIndex++) {
//         for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
//             if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
//                 counter++;
//             }
//         }
//     }
//     console.log(counter);
// }

function myFunc(matrix) {
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
myFunc([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);

console.log('------');

myFunc([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);