const { dealership } = require('./dealership');
const { expect } = require('chai');


describe('Tests for dealership', () => {
    let discountForOldCar = {
        'Audi A4 B8': 15000,
        'Audi A6 4K': 20000,
        'Audi A8 D5': 25000,
        'Audi TT 8J': 14000,
    }

    describe('Tests for newCarCost', () => {
        it('checks for old car model', () => {
            let price = 0;
            let oldCarModel = 'Audi A6 4K';
            let newCarPrice = 40000;
            if (discountForOldCar.hasOwnProperty(oldCarModel)) {
                price = newCarPrice - discountForOldCar[oldCarModel];
            } else {
                price = newCarPrice;
            }
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(price);
        });
    });

    describe('Tests for carEquipment', () => {
        it('should check for extras', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'navigation'];
            let indexArr = [1, 2];
            let selectedExtras = [];
            indexArr.forEach(i => {
                selectedExtras.push(extrasArr[i])
            });
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(selectedExtras);
        });
    });
    describe('tests for euroCategory', () => {
        it('checks for discount', () => {
            let price = dealership.newCarCost('Audi A4 B8', 30000);
            let discountPrice = price - (price * 0.05);
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${discountPrice}.`);
        });
        it('print price without discount', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});

//  mocha 10\dealership.test.js