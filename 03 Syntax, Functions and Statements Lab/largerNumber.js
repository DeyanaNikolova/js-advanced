function solve(firstNum, secondNum, thirdNum) {
    let largerNum = 0
for (let i = 0; i < 3; i++){
    if(firstNum > secondNum && firstNum > thirdNum){
        largerNum = firstNum;
    } else if(secondNum > firstNum &&secondNum > thirdNum){

        largerNum = secondNum;
    } else {
        largerNum = thirdNum;
    }
}
    console.log(`The largest number is ${largerNum}.`);
}
solve(5, -3, 16);
solve(-3, -5, -22.5);
solve(80, 145, 20);