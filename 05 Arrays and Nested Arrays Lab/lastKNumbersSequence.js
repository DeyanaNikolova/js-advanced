function solve(n, k) {
    let result = [1];
    for(let i = 1; i < n; i++){
        let sum = 0;
        for(let num of result.slice(-k)){
            sum += num;
        }
        result.push(sum);
    }
    return result;
}
console.log(solve(6, 3));
console.log(solve(8, 2));