const { mathEnforcer } = require('./mathEnforcer.js');
const { assert } = require('chai');

describe('mathEnforcer function tests', () => {
    describe('add five function tests', () => {
        // tests with incorrect inputs
        it('Should return undefined with srting', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });

        it('Should return undefined with  an object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });

        it('Should return unefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });

        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });

        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });

        // test with correct inputs
        it('Positive number +5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });

        it('Negative number +5', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });

        it('Decimal number +5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
    });

    describe('subtract ten function tests', () => {
        // tests wit uncorrect inputs
        it('Should return undefined with srting', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });

        it('Should return undefined with  an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });

        it('Should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });

        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });

        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        // tests with correct inputs
        it('Positive number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });

        it('Negative number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });

        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
    });

    describe('sum two numbers function tests', () => {
        // tests with correct inputs
        it('Two positive numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30);
        });

        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5);
        });

        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(1.5, 2.6) === 4.1);
        });

        //tests with incorrect inputs
        it('First param string, second param number', () => {
            assert(mathEnforcer.sum('1', 2) === undefined);
        });

        it('First param number, second param string', () => {
            assert(mathEnforcer.sum(2, '1') === undefined);
        });

        it('First param nudefined, second param number', () => {
            assert(mathEnforcer.sum(undefined, 2) === undefined);
        });

        it('First param number, second param undefined', () => {
            assert(mathEnforcer.sum(2, undefined) === undefined);
        });

        it('First param null, second param number', () => {
            assert(mathEnforcer.sum(null, 2) === undefined);
        });

        it('First param number, second param null', () => {
            assert(mathEnforcer.sum(2, null) === undefined);
        });
    });
});

//  mocha 04\mathEnforcer.test.js