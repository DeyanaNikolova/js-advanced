class ChristmasDinner {
    constructor(budget) {
        this.setBudget(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    setBudget(budget) {
       
        if (this.budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
    }

    shopping(product) {
        if (Math.sign(this.budget) === -1) {
            throw new Error('The budget cannot be a negative number');
        }
        let type = product[0];
        let price = Number(product[1]);

        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        let haveProducts;

        for (let product of recipe.productsList) {
            if (this.products.includes(product)) {
                haveProducts = true;
            } else {
                haveProducts = false;
            }
        }

        if (haveProducts == false) {
            throw new Error('We do not have this product');
        }
        this.dishes.push({
            recipeName: recipe.recipeName,
            productsList: recipe.productsList
        });
       
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(guestName, dish) {
       
        if(this.dishes.forEach(d => d.recipeName !== dish)) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(guestName)) {
            throw new Error('This guest has already been invited');
        } else {
          
            this.guests[guestName] = dish;
            return `You have successfully invited ${guestName}!`;
        }
    }

    showAttendance() {
        let result = [];
      
        let keys = Object.keys(this.guests);
        this.dishes.forEach(d => {
            for(let key of keys){
               if (d.recipeName == this.guests[key]){
             result.push(`${key} will eat ${this.guests[key]}, which consists of ${d.productsList.join(', ')}`)   
               }
            
            }    
        });
         
     return result.join('\n').trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);

dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
