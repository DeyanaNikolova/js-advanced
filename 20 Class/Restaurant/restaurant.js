class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        for (const element of products) {
            let isAdded = false;

            let product = {
                productName: element.split(' ')[0],
                quantity: Number(element.split(' ')[1]),
                totalPrice: Number(element.split(' ')[2])
            };


            if (product.totalPrice <=this.budgetMoney) {
                if (this.stockProducts[product.productName] != undefined) {
                    this.stockProducts[product.productName] += product.quantity;
                    this.budgetMoney -= product.totalPrice;
                } else {
                    this.stockProducts[product.productName] = product.quantity;
                    this.budgetMoney -= product.totalPrice;
                }
                isAdded = true;
            }
            this.history.push(isAdded ? `Successfully loaded ${product.quantity} ${product.productName}` : `There was not enough money to load ${product.quantity} ${product.productName}`);

        }
        return this.history.join('\n');
    }
    addToMenu(mealName, neededProducts, price) {

        let meal = {
            mealName: mealName,
            products: [],
            price: Number(price)
        }

        for (let prod of neededProducts) {
            let product = {
                productName: prod.slit(' ')[0],
                quantity: prod.split('')[1]
            };
            meal.products.push(product);
        }

        if (this.menu[meal.mealName] == undefined) {
            this.menu[meal.mealName] = meal;

            let counter = Object.keys(this.menu).length;

            return counter == 1 ? `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?` : `Great idea! Now with the ${mealName} we have ${counter} meals in the menu, other ideas?`

        } else {
            return `The ${mealName} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {

        let mealCounter = Object.keys(this.menu).length;
        let result = [];

        if (mealCounter > 0) {
            for (let key in this.menu) {
                let element = this.menu[key];
                result.push(`${element.mealName} - $ ${element.price}`)
            }
            return result.join('\n');
        } else {
            return "Our menu is not ready yet, please come later...";
        }
    }

}

// input 1
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// input 2
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// input 3
let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());

