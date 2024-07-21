// function solve(numbers) {

//     let result = [];
//     let sorted = numbers.sort((a, b) => a - b);

//    while (sorted.length > 0) {
//     let smallest = sorted.shift();
//     result.push(smallest);
//     let biggest = sorted.pop();
//     result.push(biggest);
//    }  
//     return result;
// }

function solve(numbers) {
    let result = [];
    let sorted = numbers.sort((a, b) => a - b);

    for(let i = numbers.length / 2; i > 0; i--){
        let smallest = sorted.shift();
        let biggest = sorted.pop();
        result.push(smallest);
        result.push(biggest);
    }
    return result;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));