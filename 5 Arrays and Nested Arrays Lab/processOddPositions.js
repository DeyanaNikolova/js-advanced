function solve(numbers) {

    console.log(numbers
        .filter((x, i) => i % 2)
        .map(x => x * 2)
        .reverse()
        .join(' '));

       // Solution 2:
    //     let arrL = arr.length;
    //     let result = [];
    //     for(let i = 0; i < arrL; i++){
    //       if(i % 2 != 0){
    //           let doubled = arr[i] * 2;
    //           result.push(doubled);
    //       }
    //     }
    //    return result.reverse().join(' ');
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);

// function solve(numbers) {
//     const oddPositions = [];
//     for( let i = 1; i < numbers.length; i+=2){
//         let currNum = numbers[i];
//         currNum *=2;
//         oddPositions.push(currNum);  
//     }
//     console.log(oddPositions.reverse().join(' '));
// }
