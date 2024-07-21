const isOddOrEven = require('./evenOrOdd');
const { assert } = require('chai');

describe('IsEvenOrOdd function tests', () => {
    // Invalid input tests

    it('should return undefined if param is numner', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('should return undefined if param is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });

    it('should return undefined if param is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it('should return undefined if param is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });

    it('should return undefined if param is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });

    // Valid input tests

    it('should return even as result', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });

    it('should return odd as result', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });

});

//    mocha 02\evenOrodd.test.js
