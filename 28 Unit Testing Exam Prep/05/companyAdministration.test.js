const { companyAdministration } = require('./companyAdministration');
const { expect } = require('chai');

describe('Tests for  company Administration', () => {

    describe('Tests for hiringEmployee', () => {

        it('should match position ', () => {
            expect(() => companyAdministration.hiringEmployee('Ivan', 'Developer', 3)).to.throw('We are not looking for workers for this position.');
        });
        it('should have experience', () => {
           expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equal('Ivan was successfully hired for the position Programmer.'); 

           expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 4)).to.equal('Ivan was successfully hired for the position Programmer.');

           expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2)).to.equal('Ivan is not approved for this position.');
        });
    });
    describe('Tests for calculateSalary', () => {
        it('should have positive number as param', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');

            expect(() => companyAdministration.calculateSalary('1')).to.throw('Invalid hours');

            expect(() => companyAdministration.calculateSalary([])).to.throw('Invalid hours');
        });
        it('should calculate the salary', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
    });
    describe('Tests for firedEmployee', () => {
        it('should have an array and number as params', () => {
            expect(() => companyAdministration.firedEmployee('employees', 1)).to.throw('Invalid input');

            expect(() => companyAdministration.firedEmployee(['Ivan'], '1')).to.throw('Invalid input');

            expect(() => companyAdministration.firedEmployee(['Ivan'], [])).to.throw('Invalid input');

            expect(() => companyAdministration.firedEmployee(['Ivan', 'Peter'], 3)).to.throw('Invalid input');

            expect(() => companyAdministration.firedEmployee(['Ivan', 'Peter'], -1)).to.throw('Invalid input');
        });

        it('sould remove employee form the array', () => {
            expect(companyAdministration.firedEmployee(['Ivan', 'Peter', 'George'], 1)).to.equal('Ivan, George');
        });
    });
});

// mocha 05\companyAdministration.test.js