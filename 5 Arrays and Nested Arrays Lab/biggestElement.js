function solve(matrix) {

    let biggestRow = [];

    for (let i = 0; i < matrix.length; i++) {
        let sortedRow = matrix[i].sort((a, b) => b - a);   // row[i] = whole row elements
        biggestRow.push(sortedRow[0]);
    }

    biggestRow.sort((a, b) => b - a);
    return biggestRow[0];
}


console.log(solve([[20, 50, 10],
[8, 33, 145]]));

console.log('---');

console.log(solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]));
