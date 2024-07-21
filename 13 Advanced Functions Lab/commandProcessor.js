// function createProcessor() {
//     let state = '';
//     function append(str) {
//         state += str;
//     }
//     function removeStart(n){
//         state = state.slice(n);
//     }
//     function removeEnd(n) {
//         state = state.slice(0, -n);
//     }
//     function print() {
//         console.log(state);
//     }

//     return {
//         append,
//         removeStart,
//         removeEnd,
//         print
//     }
// }


// let test = createProcessor();

// test.append('hello');
// test.append('again');
// test.removeStart(3);
// test.removeEnd(4);
// test.print();


function solution() {
    let result = '';
    return {
        append(str){
            result += str;
        },
        removeStart(num){
            result = result.slice(num);
        },
        removeEnd(num){
            result = result.substring(0, result.length - num);
        },
        print(){
            console.log(result);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
