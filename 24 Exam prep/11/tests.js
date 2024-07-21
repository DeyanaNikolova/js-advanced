const { carService } = require('./03. Car service_Resources');
const { expect } = require('chai');
const exp = require('constants');

describe('Car servise test', () => {
    describe('isItExpensive', () => {
        it('Should return severe issue', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });
        it('Should return other message', () => {
            expect(carService.isItExpensive('none')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe('discount', () => {
        it('Should return calculated discount', () => {
            expect(carService.discount(1, 100)).to.equal('You cannot apply a discount');
            expect(carService.discount(2, 100)).to.equal('You cannot apply a discount');
            expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$');
            expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
            expect(carService.discount(8, 100)).to.equal('Discount applied! You saved 30$');

        });
        it('Should validate input', () => {
            expect(() => carService.discount('1', 2)).to.throw('Invalid input');
            expect(() => carService.discount(1, '2')).to.throw('Invalid input');
            expect(() => carService.discount('1')).to.throw('Invalid input');
            expect(() => carService.discount(2)).to.throw('Invalid input');
            expect(() => carService.discount([2], 4)).to.throw('Invalid input');
            expect(() => carService.discount({}, 2)).to.throw('Invalid input');
        });
    });

    describe('partsToBuy', () => {
        it('Should return valid result', () => {

            expect(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],
                ["blowoff valve", "injectors"])).to.equal(145);

        });

        it('Should return zero with empty first array', () => {

            expect(carService.partsToBuy(
                [{}, { part: "coil springs", price: 230 }],
                ["blowoff valve", "injectors"])).to.equal(0);
        });

        it('Should have arrays as params ', () => {

            expect(() => carService.partsToBuy('str', 2)).to.throw('Invalid input');
            expect(() => carService.partsToBuy({}, {})).to.throw('Invalid input');
            expect(() => carService.partsToBuy({}, [])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(1, [])).to.throw('Invalid input');

        });

    });
})

// [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]
// ["blowoff valve", "injectors"]