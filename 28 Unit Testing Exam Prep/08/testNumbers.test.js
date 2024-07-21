const { testNumbers } = require('./testNumbers');
const { expect } = require('chai');

describe('Tests for testNumbers', () => {
    describe('Tests for sumNumbers', () => {
        it('should have numbers as params', () => {
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers([], 2)).to.equal(undefined);
        });
        it('should sum two numbers', () => {
            let num1 = 1;
            let num2 = 2;
            let sum = (num1 + num2).toFixed(2)
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(sum);
            num1 = -1;
            num2 = -2;
            sum = (num1 + num2).toFixed(2)
            expect(testNumbers.sumNumbers(num1, num2)).to.equal(sum);
        });
    });
    describe('Tests fot numberChecker', () => {
        it('should check for valid input', () => {  
            expect(()=>testNumbers.numberChecker(Number('a'))).to.throw('The input is not a number!');
        });
        it('should check it is even or odd', () => {
            let num = 1;
            let result;
            if(num % 2 == 0){
                result = 'The number is even!';
            }else {
                result ='The number is odd!';
            }
            expect(testNumbers.numberChecker(num)).to.equal(result);
        });
    });
    describe('Tests for averageSumArray', () => {
        it('should sum all numbers in an array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3, 4])).to.equal(10/4);
        });
    });
});


//  mocha 08\testNumbers.test.js