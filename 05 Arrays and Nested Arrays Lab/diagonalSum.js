function solve(numbers) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let index1 = 0;
    let index2 = numbers[0].length - 1;
    numbers.forEach(x => {
        firstDiagonal += x[index1++];
        secondDiagonal += x[index2--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}
solve([[20, 40],
      [10, 60]]);

solve([[3, 5, 17],
      [-1, 7, 14],    
      [1, -8, 89]]);