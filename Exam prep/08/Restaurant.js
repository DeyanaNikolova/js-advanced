class Restaurant {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.stockProduct = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');

            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (!this.stockProduct[productName]) {

                if (this.budget >= productTotalPrice) {
                    this.stockProduct[productName] = productQuantity;
                    this.budget -= Number(productTotalPrice);
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                }
            } else if (this.stockProduct[productName]) {

                if (this.budget >= productTotalPrice) {
                    this.stockProduct[productName] += productQuantity;
                    this.budget -= Number(productTotalPrice);
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                }
                else {
                    this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                }
            }
        }
        return this.history.join('\n');
    }


    addToMenu(mealName, products, price) {

        let meal = {
            mealName,
            products: [],
            price: price
        }
        for(let item of products){
            let [productName, productQuantity] = item.split(' ');
            productQuantity = Number(productQuantity);
            meal.products.push(productName, productQuantity);
        }
       
       
        if (this.menu[meal.mealName]  == undefined) {
            this.menu[meal.mealName] = meal;
           
            let counter = Object.keys(this.menu).length;

            if (counter == 1) {
                return `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?`
            } else if (counter != 1) {
                return `Great idea! Now with the ${mealName} we have ${counter} meals in the menu, other ideas?`
            }

        } else {
            return `The ${mealName} is already in the our menu, try something different`;
        }
    }


    showTheMenu() {
        let mealCounter = Object.keys(this.menu).length;
        let result = [];
        if (mealCounter > 0) {
            for (let key in this.menu) {
                let element = this.menu[key];
                result.push(`${element.mealName} - $ ${element.price}`);
            }
            return result.join('\n');
        }else{
            return 'Our menu is not ready yet, please come later...';
        }  
    }     
    
    // makeTheOrder(meal){
    
    //     let orderMeal = this.menu[meal];
    //     if(orderMeal == undefined){
    //         return `There is not ${meal} yet in our menu, do you want to order something else?"`
    //     }else {

    //         let price = this.menu[meal].price;
          
    //         let haveProducts = true;

    //         for(let product of this.stockProduct[productName]){
    //             let prodName = product.productName;
    //             let qty = product.productQuantity;

    //             if(this.stockProduct[prodName] == undefined || this.stockProduct[prodName] < qty){
    //                 haveProducts = false;
    //                 break;
    //             }else{
    //                 this.stockProduct[prodName] -= qty;
    //                 this.budget += price;
    //             }
    //         }

    //         if(!haveProducts){
    //             return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    //         }else{
    //             return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
    //         }
    //     }
    // }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));




