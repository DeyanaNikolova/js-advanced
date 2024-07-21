function lowestPrice(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let productInfo = str.split(' | ');
        let town = productInfo[0];
        let product = productInfo[1];
        let price = Number(productInfo[2]);

        if (!obj.hasOwnProperty(product)) {
            obj[product] = { town, price };
        } else {
            if (price < obj[product].price) {
                obj[product] = { town, price };
            }
        }
    }
    let productNames = Object.keys(obj);
    for (let i = 0; i < productNames.length; i++) {
        let productName = productNames[i];
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`);
    }
}

// function solve(arr) {
//     let products = [];
  
//     for(let line of arr){
//         let [town, product, price] = line.split(' | ');
//         price = Number(price);

//         if(products.filter(x => x.product == product).length > 0){
//             let obj = products.find(x => x.product == product);

//             if(obj.price > price){
//                 obj.price = price;
//                 obj.town = town;
//             }

//         } else{
//             let obj = {product, town, price};
//             products.push(obj);
//         }
//     }
//     for(let product of products){
//         console.log(`${product.product} -> ${product.price} (${product.town})`);
//     }
// }

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

