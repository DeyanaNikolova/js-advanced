function solve(arr) {
   let newArr = [];
   let sumOld = 0;
   let sumNew = 0;

   for (let i = 0; i < arr.length; i++) {
      let currentNum = arr[i];
      sumOld += currentNum;

      if (currentNum % 2 == 0) {
         currentNum += i;
         sumNew += currentNum;
         newArr.push(currentNum);

      } else {
         currentNum -= i;
         sumNew += currentNum;
         newArr.push(currentNum);
      }
   }
   console.log(newArr);
   console.log(sumOld);
   console.log(sumNew);
}


solve([5, 15, 23, 56, 35]);

console.log('-----');

solve([-5, 11, 3, 0, 2]);






