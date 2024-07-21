class CarDealership {
    constructor(name) {
        this.name = name;
        this.totalIncom = 0;
        this.availableCars = [];
        this.soldCars = [];
    }

    addCar(model, horsepower, price, mileage) {

        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        let carObj = {
            model,
            horsepower,
            price,
            mileage
        };
        this.availableCars.push(carObj);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {

        let isCarInArr = false;
        let soldPrice = 0;
        let soldCar;

        for (let car of this.availableCars) {

            if (car.model !== model) {
                isCarInArr = false;

            } else {
                soldCar = car;
                isCarInArr = true;
                this.availableCars.shift();
                break;
            }
        }
        if (!isCarInArr) {
            throw new Error(`${model} was not found!`);
        }
        let mileageDiffrence = soldCar.mileage - desiredMileage;
        if (soldCar.mileage <= desiredMileage) {
            soldPrice = soldCar.price;

        } else if (mileageDiffrence <= 40000) {
            soldPrice = soldCar.price - soldCar.price * 0.05;

        } else if (mileageDiffrence > 40000) {
            soldPrice = soldCar.price - soldCar.price * 0.10;
        }
        // let obj = {
        //     model,
        //     horsepower,
        //     soldPrice
        // }

        this.soldCars.push(soldCar);
        this.totalIncom += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        let available = [];
        if (this.availableCars.length > 0) {
            available.push(`-Available cars:`);
            this.availableCars.forEach(c => {
                available.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
            });
            return available.join('\n');
        } else {
            return "There are no available cars"
        }
    }

    // salesReport (criteria){

    //     if(criteria !== 'horsepower' || criteria !== 'model'){
    //         throw new Error('Invalid criteria!');
    //     }

    //     let sold = [];
    //     sold.push(`-${this.dealershipName} has a total income of ${this.totalIncome.toFixed(2)}$`);
    //     sold.push(`-${this.soldCars.length} cars sold:`);

    //      if(criteria === 'horsepower'){
    //         let sortedHorsepower = this.soldCars
    //         .map(c => c.horsepower)
    //         .sort((a, b) => b - a);
    //        sold.push(sortedHorsepower);

    //     }else{
    //         let sortedModel = this.soldCars.map(c => c.model)
    //         .sort((a, b) => a.localeCompare(b));
    //         sold.push(sortedModel);
    //     }
      
    //     this.soldCars.forEach(c => {
    //         sold.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)
    //     });
    //     return sold.join('\n');
    // }
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



