const { rentCar } = require('./rentCar');
const { expect } = require('chai');

describe('Tests for rent car', () => {

    describe('Test for searchCar', () => {

        it('checks for invalid params', () => {
            expect(() => rentCar.searchCar('string', 'string').to.throw('Invalid input!'));

            expect(() => rentCar.searchCar('string', []).to.throw('Invalid input!'));

            expect(() => rentCar.searchCar(1, 'string').to.throw('Invalid input!'));

        });

        it('checks for valid params', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equal('There is 1 car of model BMW in the catalog!');

            expect(() => rentCar.searchCar(["Volkswagen", "Audi"], 'BMW').to.throw('There are no such models in the catalog!'));
        });
    });

    describe('Tests for calculatePriceOfCar', () => {

        it('checks for invalid params', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 'abc').to.throw('Invalid input!'));

            expect(() => rentCar.calculatePriceOfCar('abc', []).to.throw('Invalid input!'));

            expect(() => rentCar.calculatePriceOfCar('abc', 'bca').to.throw('Invalid input!'));
        });

        it('checks for valid params', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal('You choose BMW and it will cost $90!');
        
            expect(() => rentCar.calculatePriceOfCar('Lada', 2).to.equal('No such model in the catalog!'));
        });
    });

    describe('Tests for checkBudget', () => {

        it('checks for invalid params', () => {
            expect(() => rentCar.checkBudget('1', 1, []).to.throw('Invalid input!'));
        });

        it('checks for invalid params', () => {
            expect(() => rentCar.checkBudget(1, 1, '1').to.throw('Invalid input!'));
    
            expect(() => rentCar.checkBudget(1, '1', 1).to.throw('Invalid input!'));
        });

        it('checks for valid params', () => {
            expect(() => rentCar.checkBudget(20, 2, 30).to.equal('You need a bigger budget!'));
        
            expect(rentCar.checkBudget(20, 1, 20)).to.equal('You rent a car!');
        
            expect(rentCar.checkBudget(20, 1, 30)).to.equal('You rent a car!');
        });
    });
});



// mocha 03\rentCar.test.js