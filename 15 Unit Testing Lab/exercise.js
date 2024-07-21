function solve(numbers, startIndex, endIndex) {
    
    let subNumbers = numbers.slice(startIndex, endIndex + 1);

    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
    
}
solve([10, 20, 30, 40, 50, 60], 3, 300);