const { expect } = require('chai');
const  { companyAdministration } = require('./companyAdministration.js');

describe('companyAdministration', () => {
    describe('hiringEmployee', () => {
        it('test 1', () => {
            expect(() => companyAdministration.hiringEmployee('A', 'A', 1)).to.throw('We are not looking for workers for this position.');
            expect(companyAdministration.hiringEmployee('A', 'Programmer', 2)).to.equal('A is not approved for this position.');
            expect(companyAdministration.hiringEmployee('A', 'Programmer', 3)).to.equal('A was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('A', 'Programmer', 4)).to.equal('A was successfully hired for the position Programmer.');

        });
    });

    describe('calculateSalary', () => {
        it('test 2', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(160)).to.equal(160 * 15);
            expect(companyAdministration.calculateSalary(161)).to.equal(161 * 15 + 1000);
            expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary('1')).to.throw('Invalid hours');
        });
    });

    describe('firedEmployee', () => {
        it('test 3', () => {
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee([], 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee('hey', '1')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan'], null)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan'], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan'], 3)).to.throw('Invalid input');
            expect(companyAdministration.firedEmployee(['Peter', 'Ivan'], 1)).to.equal('Peter');
            expect(companyAdministration.firedEmployee(['Peter', 'Ivan', 'George'], 1)).to.equal('Peter, George');
        });
    });
});

//  mocha 03\companyAdministration.test.js