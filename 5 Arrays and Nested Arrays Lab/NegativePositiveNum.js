function solve(input) {
    let result = [];
    for(let el of input){
        if(el >= 0){
            result.push(el);
        } else{
            result.unshift(el);
        }
    }
    console.log(result.join('\n'));
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);