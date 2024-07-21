function solve(first, second, third) {
    let result = first.length + second.length + third.length;
    let avr = Math.floor(result / 3);
    console.log(result);
    console.log(avr);
}

solve('chocolate', 'ice cream', 'cake')