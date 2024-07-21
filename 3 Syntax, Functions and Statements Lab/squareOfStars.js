function solve(num) {
    if (num == undefined) {
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5));
        }
    } else {
        for (let i = 0; i < num; i++) {
            console.log('* '.repeat(num));
        }
    }
}
solve(1);
solve(2);
solve(5);
solve();
solve(7);