function solve(arr, n) {
    const rotatedArr = [];

    for (let i = 0; i < n; i++) {
        let elToMove = arr.pop();
        arr.unshift(elToMove);
    }
    console.log(arr.join(' '));
}
solve(['1',
    '2',
    '3',
    '4'],
    2);
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);