function sumFirstLast(input) {
  
    let firstNum = input.shift();
    let lastNum = input.pop();
    let result = Number(firstNum) +Number(lastNum);
    console.log(result);
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);