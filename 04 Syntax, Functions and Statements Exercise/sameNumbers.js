function solve(number) {
    let input = String(number);
    let isSame = true;
    let sum = 0;
    let firstDigit = input[0];

    for (let i = 0; i < input.length; i++) {
        let currDigit = Number(input[i]);
        sum += currDigit;
        if (firstDigit != currDigit) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
solve(2222222);
solve(1234);