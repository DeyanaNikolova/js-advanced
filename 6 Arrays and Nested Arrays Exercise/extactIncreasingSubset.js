function solve(arr) {
  const result = [];
     let biggest = 0;
     for(let i = 0; i < arr.length; i ++){
         let currNum = arr[i];
         if(currNum >= biggest){
             biggest = currNum;
             result.push(biggest);
         } else{
             continue;
         }
     }
     return result;
}
console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));

console.log(solve([1, 
    2, 
    3,
    4]));

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]));