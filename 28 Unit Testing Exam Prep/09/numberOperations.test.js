const { numberOperations } = require('./numberOperations');
const { expect } = require('chai');

describe('Tests fot numberOperations', () => {
    describe('Tests for powNumber', () => {
        it('should calc the power of a number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
    });
    describe('Tests for numberChecker', () => {
        it('should check for valid input', () => {
            let input = Number('a');
            expect(() => numberOperations.numberChecker(input)).to.throw('The input is not a number!');
        });
        it('should check the number', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });
    });
    describe('Tests fot sumArrays', () => {
        it('should sum numbers in arrays', () => {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3, 4, 5])).to.deep.equal([2, 4, 6, 8, 5]);
        });
    });
});

//  mocha 09\numberOperations.test.js