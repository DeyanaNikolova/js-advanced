function subSum(arr, start, end) {

    if (Array.isArray(arr) == false) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    let subArr = arr.slice(start, end + 1);
    let sum = subArr.reduce((a, x) => a + Number(x), 0);

    // for (let i = start; i <= end; i++) {
    //     sum += Number(arr[i]);

    // }
    return sum;
}
function test(name, actual, expected) {            // Unit test
    if (Number.isNaN(expected) && Number.isNaN(actual)) {
        console.log(name, 'Pass');
    } else if (actual.toFixed(2) == expected.toFixed(2)) {
        console.log(name, 'Pass');
    } else {
        console.log(name, 'Failed');
    }
}

test('Case 1', subSum([10, 20, 30, 40, 50, 60], 2, 4), 120);
test('Case 2', subSum([10, 20, 30, 40, 50, 60], 3, 300), 150);
test('Case 3', subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1), 3.3);
test('Case 4', subSum([10, 'twenty', 30, 40], 0, 2), NaN);
test('Case 5', subSum([], 1, 2), 0);
test('Case 6', subSum('text', 0, 2), NaN);