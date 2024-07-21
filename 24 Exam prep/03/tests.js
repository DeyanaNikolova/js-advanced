const { rentCar } = require('./rentCar');
const { expect } = require('chai');



describe('Rent car tests', () => {
    describe('Search car', () => {

        it('Should have two valid inputs', () => {
            let shop = ["Volkswagen", "BMW", "Audi"];
            let model = "BMW";
            if (shop.includes('BMW')) {
                return 1;
            }
            expect(rentCar.searchCar(shop, model)).to.equal(`There is 1 car of model BMW in the catalog!`)
        });
        it('Should check for valid input', () => {
            let shop = ["Volkswagen", "Audi"];
            // let model = "BMW";
            if (!shop.includes('BMW')) {
                return -1;
            }
            expect(() => rentCar.searchCar(-1, 'BMW')).to.throw(Error, 'There are no such models in the catalog!');
        });
        it('Should have an array for first param', () => {

            let shop = ["Volkswagen", "Audi"];
            if (Array.isArray(shop)) {
                return true;
            }
            expect(() => rentCar.searchCar('str', 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(1, 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar({}, 'BMW')).to.throw(Error, 'Invalid input!');
        });
        it('Should have srting for second param', () => {
            let model = 'Love';
            if (model !== 'string') {
                return false
            }
            expect(() => rentCar.searchCar(['BMW'], 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW'], {})).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW'], [])).to.throw(Error, 'Invalid input!');
        });
    });

    describe('Calculate price of the car', () => {

        it('Should calculate the cost with valid input', () => {
            let model = 'BMW';
            let days = 5;
            let catalogue = {
                Volkswagen: 20,
                Audi: 36,
                Toyota: 40,
                BMW: 45,
                Mercedes: 50
            };

            if (catalogue[model] !== undefined) {
                let cost = catalogue[model] * days;
                return cost
            }
            expect(rentCar.claculatePriceOfCar(model, days)).to.equal(`You choose BMW and it will cost $225!`);
        });

        it('Should have string for first param', () => {
            let model = 'BMW';
            if (model !== 'string') {
                return false
            }
            expect(() => rentCar.searchCar('BMW', 1)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar({}, 1)).to.throw(Error, 'Invalid input!');
        });

        it('Should have integer for second param', () => {
            let days = 5
            if (Number.isInteger(days)) {
                return true
            }
            expect(() => rentCar.searchCar(['BMW'], '1')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW'], {})).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW'], [])).to.throw(Error, 'Invalid input!');

        });

        it('Should throw error with invalid input', () => {
            let model = 'BMW';
            let days = 5;
            let catalogue = {
                Volkswagen: 20,
                Audi: 36,
                Toyota: 40,
                Mercedes: 50
            };

            if (catalogue[model] == undefined) {
                return false
            }
            expect(() => rentCar.claculatePriceOfCar(model, days)).to.throw('No such model in the catalog!');
        });
    });

    describe('Chech budget', () => {
        it('Should have integers for params', () => {
            let costPerDay = 10;
            let days = 5;
            let budget = 60;
            let cost = costPerDay * days;
            if (budget >= cost) {
                return budget - cost;
            }
            expect(rentCar.checkBudget(costPerDay, days, budget)).to.equal('You rent a car!')
        });

        it('Should check valid input', () => {
            let costPerDay = 10;
            let days = 5;
            let budget = 60;
            let cost = costPerDay * days;
            if (budget >= cost) {
                return cost - budget;
            }
            expect(rentCar.checkBudget(costPerDay, days, budget)).to.equal('You need a bigger budget!')

        });

        it('Should throw error with invalid params', () => {
            let costPerDay = 10;
            let days = 5;
            let budget = 60;
            let cost = costPerDay * days;
            if (costPerDay !== 'number' || days !== 'number' || budget !== 'number') {
                return false;
            }
            expect(() => rentCar.checkBudget('1', 2, 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, '2', 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, '3')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget('1', [], 3)).to.throw(Error, 'Invalid input!');

        });
    });
});
