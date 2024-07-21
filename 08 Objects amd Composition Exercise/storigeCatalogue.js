function storageCatalogue(arr) {
    let obj = {};

    for (let line of arr) {
        let [product, price] = line.split(' : ');
        let letter = product[0];

        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = {};
        }
        obj[letter][product] = price;
    }

    let sortedLetters = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for(const letter of sortedLetters){
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a, b) => a.localeCompare(b));
        
        for(const product of sortedProducts){
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }

      // Solution 2:
    // let result = arr.sort((a, b)=> a.localeCompare(b));
    // let current = [];
    // let char = '';

    // for(let i = 0; i < result.length; i++){
    //     current = result[i].split(' : ');

    //     if(result[i][0] !== char){
    //         console.log(result[i][0]);
    //     }
    //     console.log(`  ${current[0]}: ${current[1]}`);
    //     char = result[i][0];
    // }
}

storageCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

