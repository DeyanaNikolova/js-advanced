function solve(num1, num2, str) {
    let result = 0;
    switch (str) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
        case '%': result = num1 % num2;
            break;
        case '**': result = Math.pow(num1, num2);
            break
        default:
            break;
    }
    console.log(result);
}
solve(5, 6, '+');
solve(3, 5.5, '*');
solve( 5, 2, '**');