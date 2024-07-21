function solve(nums) {
    nums.sort((a, b)=> a -b);
    const result = [];

    for(let i = Math.floor(nums.length/ 2); i < nums.length;i++){
        result.push(nums[i]);
    }
    return result

    // Solution 2:
    // let length = arr.length;
    // let sorted = arr.sort((a, b) => a - b).slice(length / 2);
    // return sorted;
}
console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));