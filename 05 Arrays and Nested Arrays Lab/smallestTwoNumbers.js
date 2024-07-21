function solve(nums) {
    let result = [];
    nums.sort((a, b)=> a - b);
    result.push(nums.shift());
    result.push(nums.shift());
   console.log(result.join(' '));
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);