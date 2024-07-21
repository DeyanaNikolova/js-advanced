function calc() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');

    let firstNumbet = Number(num1.value);
    let secondNumber = Number(num2.value);
    
    let sum = document.getElementById('sum');
    sum.value = firstNumbet + secondNumber;
}
