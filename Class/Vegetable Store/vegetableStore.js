class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables (vegetables){

        const typeArr = [];
        for(let vegetable of vegetables){
           
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            const product = this.availableProducts.find(p => p.type == type);

            if(!product){
                this.availableProducts.push({
                    type,
                    quantity,
                    price
                });
                typeArr.push(type);
            }else{
                product.quantity += quantity;
                if(product.price < price){
                    product.price = price;
                }
            }
        }
        let result = typeArr.join(', ');
        return `Successfully added ${result}`;
    }

    buyingVegetables (selectedProducts){
        let totalPrice = 0;
        for(let prod of selectedProducts){
            let [type, quantity] = prod.split(' ');
         quantity = Number(quantity);

         const product = this.availableProducts.find(p => p.type == type);
         if(!product){
            throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
         }
         if(quantity > product.quantity){
            throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
         }
         let price = quantity * product.price;
         product.quantity -= quantity;
         totalPrice += price;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable (type, quantity){
        const product = this.availableProducts.find(p => p.type == type);
        if(!product){
            throw new Error(`${type} is not available in the store.`);
        }
        if(quantity > product.quantity){
            product.quantity = 0;
          return `The entire quantity of the ${type} has been removed.`;
        }else{
            product.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision (){
        let result = ['Available vegetables:'];
        this.availableProducts.sort((a, b) => a.price - b.price).map(p =>{
            result.push(`${p.type}-${p.quantity}-$${p.price}`);
        });
    result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
    return result.join('\n').trim();     
    }
}

// input 1
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// input 2
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// input 3
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// input 4
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



