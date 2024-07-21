function calorieObj(arr) {
    const obj = {};

    // for (let i = 0; i < arr.length; i += 2) {
    //     let product = arr[i];
    //     let calories = arr[i + 1];
    //     obj[product]= Number(calories);
    // }

    while (arr.length!== 0) {
       let product = arr.shift();
       let calories = arr.shift();
       obj[product]= Number(calories);
    }
    console.log(obj);
}


// function solve(arr) {

//     let products = {};

//     for (let i = 0; i < arr.length; i += 2) {
//         let name = arr[i];
//         let calories = Number(arr[i + 1]);
//         products[name] = calories;
//     }
//     console.log(products);
// }
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);