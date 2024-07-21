function solve(arr) {
    let sum = arr.reduce((a, b) => a + b);
    console.log(sum);

    let inverseSum = 0;

    for (let i = 0; i < arr.length; i++) {
        inverseSum += 1 / arr[i];
    }
    console.log(inverseSum);

    let concate = arr.join('')
    console.log(concate);

}


solve([1, 2, 3]);
solve([2, 4, 8, 16]);