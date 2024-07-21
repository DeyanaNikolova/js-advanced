
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
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const car = this.availableCars.find(c => c.model == model);
        if (car == undefined) {
            throw new Error(`${model} was not found!`);
        }
        let difference = Math.abs(car.mileage - desiredMileage);
        if (car.mileage <= desiredMileage) {
            car.price = car.price;
        } else if (difference <= 40000) {
            car.price -= car.price * 0.05;
        } else {
            car.price -= car.price * 0.10;
        }

        const carIndex = this.availableCars.findIndex(c => c.model == model);
        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price
        });

        this.totalIncome += car.price;
        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }
        let currentCars = this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        let report = [`-Available cars:`];

        return `${report} \n ${currentCars.join('\n')}`;
    }

    salesReport(criteria) {
        const dealerIncome = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`;
        const soldCarsCount = `-${this.soldCars.length} cars sold:`;
        let result = [];
        let cars = '';

        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower).forEach(c => {
                result.push(`---${c.model} - ${c.horsepower} - HP - ${c.soldPrice.toFixed(2)}$`);
            });
            cars = result.join('\n');
        } else {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
                .forEach(c => {
                    result.push(`---${c.model} - ${c.horsepower} - HP - ${c.soldPrice.toFixed(2)}$`);
                });
            cars = result.join('\n');
        }
        return [
            dealerIncome,
            soldCarsCount,
            cars
        ].join('\n');
    }
}
// input 1
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));


// input 3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// input 4
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
