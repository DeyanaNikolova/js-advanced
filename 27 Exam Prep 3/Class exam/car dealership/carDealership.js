class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        const car = {
            model,
            horsepower,
            price,
            mileage
        };
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {

        let car = this.availableCars.find(c => c.model == model);
        if (!car) {
            throw new Error(`${model} was not found!`);
        }
        let diffrence = Math.abs(car.mileage - desiredMileage);

        if (diffrence < 40000) {
            car.price = car.price * 0.95;

        } else if (diffrence > 40000) {
            car.price = car.price * 0.90;
        }
        let soldCar = {
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price
        }
        this.soldCars.push(soldCar);
        this.totalIncome += car.price;

        let index = this.availableCars.indexOf(car);
        this.availableCars.splice(index, 1);
        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }
        const result = ['-Available cars:'];

        this.availableCars.forEach(c => {

            result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        });
        return result.join('\n');
    }

    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error('Invalid criteria!');
        }
        const result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`];
        result.push(`-${this.soldCars.length} cars sold:`);

        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower).forEach(c =>{
                result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
            });

        }
        if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model)).forEach(c =>{
                result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)
            });   
        }
      return result.join('\n');
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



