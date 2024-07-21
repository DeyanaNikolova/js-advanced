function solve(input) {
    let area = 0;
    let inputType = typeof input;
    if (inputType === 'number') {
        area = Math.pow(input, 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We cannot calculate the circle area, because we receive a ${inputType}.`);
    }
}

solve(5);
solve('name');
solve(true);