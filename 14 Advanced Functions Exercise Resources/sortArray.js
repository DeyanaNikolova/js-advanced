function sortArray(arr, type) {
    let sortType = type;
    // const methods = {
    //     asc: (a, b) => a - b,
    //     desc: (a, b) => b - a
    // };
    // arr.sort(methods[type]);

    // if(type == 'asc'){
    //     arr.sort((a, b) => a - b);
    // } else{
    //     arr.sort((a, b) => b - a);
    // }
   return arr.sort((a, b) => (sortType == 'asc'? a - b : b - a));
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));